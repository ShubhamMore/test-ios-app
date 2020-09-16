import { Router, ActivatedRoute } from '@angular/router';
import { CouponService } from './../../services/coupan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-admin-coupons',
  templateUrl: './admin-coupons.component.html',
  styleUrls: ['./admin-coupons.component.scss'],
})
export class AdminCouponsComponent implements OnInit {
  coupons: any[];

  display: boolean;

  constructor(
    private couponService: CouponService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;

    this.coupons = [];
    this.couponService.getCoupons().subscribe((res: any) => {
      this.coupons = res;
      this.display = true;
    });
  }

  editCoupon(id: any) {
    this.router.navigate(['/admin/coupons/edit'], {
      relativeTo: this.route,
      queryParams: { coupon: id, edit: true },
    });
  }

  deleteCoupon(id: any) {
    this.couponService.deleteCoupon(id).subscribe(
      (res: any) => {
        const i = this.coupons.findIndex((coupon) => coupon._id === id);
        if (i !== -1) {
          this.coupons.splice(i, 1);
        }
      },
      (err: any) => {},
    );
  }
}
