import { NbToastrService } from '@nebular/theme';
import { CouponService } from '../../services/coupan.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ngx-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  // tslint:disable-next-line: no-output-native
  @Input() paymentDetails: any;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<string>();

  couponCode: string;

  coupon: any;

  amount: any;
  discAmount: any;
  gstAmount: any;
  totalAmount: any;

  constructor(private couponService: CouponService, private toastrService: NbToastrService) {}

  ngOnInit() {
    this.discAmount = 0;
    this.calcAmount();
  }

  onClose() {
    this.close.emit();
  }

  calcAmount() {
    let amount = +this.paymentDetails.amount;
    if (this.coupon) {
      if (this.coupon.amountType === 'amount') {
        amount = amount - +this.coupon.amount;
        this.discAmount = +this.coupon.amount;
      } else if (this.coupon.amountType === 'percentage') {
        const percentageAmount: number = amount * (+this.coupon.amount / 100);
        this.discAmount = percentageAmount;
      }
    }

    this.discAmount = (+this.discAmount * 1).toFixed(2);
    this.amount = (+amount - +this.discAmount).toFixed(2);
    this.gstAmount = (+this.amount * 0.18).toFixed(2);
    this.totalAmount = (+this.amount + +this.gstAmount).toFixed(2);
  }

  getAmount(amount: any) {
    return (+amount * 1).toFixed(2);
  }

  apply() {
    const code = this.couponCode;
    if (code) {
      this.couponService.validateCoupon(code).subscribe(
        (res: any) => {
          this.coupon = res;
          this.calcAmount();
          this.showToast('top-right', 'success', 'This coupon Applied Successfully');
        },
        (error: any) => {
          this.showToast('top-right', 'danger', error.error.message || 'Something bad happened');
        },
      );
    }
  }

  onSubmit() {
    this.submit.emit(this.couponCode);
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
}
