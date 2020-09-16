import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(private http: HttpClient) {}

  addCoupon(coupon: any) {
    return this.http
      .post(environment.server + '/coupon/addCoupon/', coupon)
      .pipe(tap(), catchError(this.handleError));
  }

  updateCoupon(coupon: any) {
    return this.http
      .post(environment.server + '/coupon/updateCoupon/', coupon)
      .pipe(tap(), catchError(this.handleError));
  }

  validateCoupon(code: string) {
    return this.http
      .post(environment.server + '/coupon/validateCoupon/', { code })
      .pipe(tap(), catchError(this.handleError));
  }

  deleteCoupon(id: string) {
    return this.http
      .post(environment.server + '/coupon/deleteCoupon/', { id })
      .pipe(tap(), catchError(this.handleError));
  }

  getCoupons() {
    return this.http
      .post(environment.server + '/coupon/getCoupons/', {})
      .pipe(tap(), catchError(this.handleError));
  }

  getCoupon(id: string) {
    return this.http
      .post(environment.server + '/coupon/getCoupon/', { _id: id })
      .pipe(tap(), catchError(this.handleError));
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
