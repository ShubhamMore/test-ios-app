import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';
import { ApiService } from '../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
})
export class DiscountComponent implements OnInit {
  discountForm: FormGroup;
  instituteId: string;
  edit: string;
  discountId: string;
  discountUpdate: any;
  display: boolean;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private location: Location,
    private active: ActivatedRoute,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit() {
    this.display = false;
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.active.queryParams.subscribe((data) => {
      this.edit = data.edit;
      this.discountId = data.discountId;
    });

    this.discountForm = this.fb.group(
      {
        discountCode: ['', Validators.required],
        discountType: ['percentage', Validators.required],
        amount: ['', Validators.required],
        description: [''],
      },
      {
        validator: this.discountValidator.bind(this),
      },
    );

    if (this.edit) {
      this.getDiscount(this.discountId);
    } else {
      this.display = true;
    }
  }

  discountValidator(group: FormGroup): { [s: string]: boolean } {
    const discountType = group.value.discountType;
    const amount = group.value.amount;
    if (discountType === 'percentage' && amount > 100) {
      return { invalidDiscount: true };
    } else if (amount < 0) {
      return { invalidDiscount: true };
    }
    return null;
  }

  getDiscount(id: any) {
    let param = new HttpParams();
    param = param.append('instituteId', this.instituteId);
    param = param.append('discountId', id);
    this.api.getDiscount(param).subscribe(
      (data: any) => {
        this.discountUpdate = data[0];

        this.discountForm.patchValue({
          discountCode: this.discountUpdate.discountCode,
          description: this.discountUpdate.description,
          discountType: this.discountUpdate.discountType,
          amount: this.discountUpdate.amount,
        });
        this.display = true;
      },
      (err: any) => {
        this.display = true;
      },
    );
  }

  onSubmit() {
    this.discountForm.markAllAsTouched();
    if (this.discountForm.invalid) {
      return;
    }
    if (this.edit === 'true') {
      let param = new HttpParams();
      param = param.append('instituteId', this.instituteId);
      param = param.append('discountId', this.discountId);
      const discount = {
        _id: this.discountId,
        discountCode: this.discountForm.value.discountCode.trim(),
        description: this.discountForm.value.description,
        amount: this.discountForm.value.amount.trim(),
        discountType: this.discountForm.value.discountType,
      };
      this.api.updateDiscount(param, discount).subscribe(
        (res) => {
          this.showToast('top-right', 'success', 'Discount Updated');
          setTimeout(() => {
            this.router.navigate([
              '/pages/institute/branch-config/manage-discount/',
              this.instituteId,
            ]);
          }, 1000);
        },
        (error) => {
          this.showToast('top-right', 'danger', 'Discount Updation Failed');
        },
      );
    } else {
      const discount = {
        discountCode: this.discountForm.value.discountCode.trim(),
        description: this.discountForm.value.description,
        amount: this.discountForm.value.amount.trim(),
        discountType: this.discountForm.value.discountType,
      };
      this.api.addDiscount(this.instituteId, discount).subscribe(
        (data) => {
          this.showToast('top-right', 'success', 'Discount Added Successfully');
          setTimeout(() => {
            this.router.navigate([
              '/pages/institute/branch-config/manage-discount/',
              this.instituteId,
            ]);
          }, 1000);
        },
        (err) => {
          console.error(err);
          this.showToast('top-right', 'danger', 'This Discount already added');
        },
      );
    }
  }

  back() {
    let confirm = true;
    if (this.discountForm.touched) {
      confirm = window.confirm('If you go back the data will be lost.');
    }
    if (confirm) {
      this.location.back();
    }
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
}
