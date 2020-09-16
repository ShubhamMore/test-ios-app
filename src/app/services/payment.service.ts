import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private paymentDetails = {
    amount: null,
    planType: null,
  };

  constructor(private http: HttpClient) {}

  getPaymentDetails() {
    return this.paymentDetails;
  }

  setPaymentDetails(amount: string, planType: string) {
    this.paymentDetails.amount = amount;
    this.paymentDetails.planType = planType;
  }

  deleteOrder(id: string) {
    return this.http
      .post(environment.server + '/institute/payment/deleteOrder/', { _id: id })
      .pipe(tap(), catchError(this.handleError));
  }

  generateOrder(order: any) {
    return this.http
      .post(environment.server + '/institute/payment/orderGenerate/', order)
      .pipe(tap(), catchError(this.handleError));
  }

  verifyPayment(payment: any, placedOrder: any) {
    return this.http
      .post(environment.server + '/institute/payment/verifyPayment/', {
        payment,
        receipt: placedOrder,
      })
      .pipe(tap(), catchError(this.handleError));
  }

  getUpgradePlanCost() {
    const url = `${environment.server}/institute/payment/getUpgradePlanCost`;
    return this.http.post(url, {}).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getAllPlans() {
    const url = `${environment.server}/institute/payment/getAllPlans`;
    return this.http.post(url, {}).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
