import { CouponService } from './../../../services/coupan.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-save-admin-coupons',
  templateUrl: './save-admin-coupons.component.html',
  styleUrls: ['./save-admin-coupons.component.scss'],
})
export class SaveAdminCouponsComponent implements OnInit {
  coupon: any;
  form: FormGroup;
  display: boolean;
  edit: any;
  id: any;

  constructor(
    private couponService: CouponService,
    private fb: FormBuilder,
    private router: Router,
    private toastrService: NbToastrService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;
    this.route.queryParams.subscribe((param: Params) => {
      this.edit = param.edit;
      this.id = param.coupon;
    });
    this.form = this.fb.group({
      code: ['', Validators.required],
      amountType: ['', Validators.required],
      amount: ['', Validators.required],
      expiryDate: ['', Validators.required],
    });
    if (this.edit) {
      this.getCoupon(this.id);
    } else {
      this.display = true;
    }
  }

  getCoupon(id: any) {
    this.couponService.getCoupon(id).subscribe((res: any) => {
      this.coupon = res;
      this.form.patchValue({
        code: this.coupon.code,
        amountType: this.coupon.amountType,
        amount: this.coupon.amount,
        expiryDate: this.coupon.expiryDate,
      });
      this.display = true;
    });
  }

  validateAmount() {
    if (this.form.value.amountType !== 'amount' && +this.form.value.amount > 100) {
      return false;
    }
    return true;
  }

  saveCoupon() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    if (!this.validateAmount()) {
      return;
    }

    const coupon: any = this.form.value;
    if (this.edit === 'true') {
      coupon._id = this.id;
      this.couponService.updateCoupon(coupon).subscribe(
        (res: any) => {
          this.showToast('top-right', 'success', 'coupon Updated Successfully');
          setTimeout(() => {
            this.router.navigate(['/admin/coupons'], { relativeTo: this.route });
          }, 500);
        },
        (err: any) => {
          this.showToast('top-right', 'danger', err.error.message);
        },
      );
    } else {
      this.couponService.addCoupon(coupon).subscribe(
        (res: any) => {
          this.showToast('top-right', 'success', 'coupon Added Successfully');
          setTimeout(() => {
            this.router.navigate(['/admin/coupons'], { relativeTo: this.route });
          }, 500);
        },
        (err: any) => {
          this.showToast('top-right', 'danger', err.error.message);
        },
      );
    }
  }

  back() {
    this.router.navigate(['/admin/coupons'], { relativeTo: this.route });
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
}
