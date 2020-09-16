import { environment } from './../../../../environments/environment';
import { PaymentService } from './../../../services/payment.service';
import { AuthService } from './../../../services/auth-services/auth.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SmsPackService } from './../../../services/smspack.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NbToastrService } from '@nebular/theme';
import { ApiService } from '../../../services/api.service';

declare var Razorpay: any;

@Component({
  selector: 'ngx-sms-recharge',
  templateUrl: './sms-recharge.component.html',
  styleUrls: ['./sms-recharge.component.scss'],
})
export class SmsRechargeComponent implements OnInit {
  display: boolean;
  smsPacks: any[];

  options: any;
  razorPay: any;
  placedOrderReceipt: any;
  instituteId: string;
  paymentDetails: { planType: string; amount: any };
  user: any;

  smsPack: any;

  checkout: boolean;

  constructor(
    private route: ActivatedRoute,
    private smsRechargeService: SmsPackService,
    private api: ApiService,
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private toastrService: NbToastrService,
    private paymentService: PaymentService,
  ) {}

  ngOnInit() {
    this.display = false;

    this.checkout = false;

    this.paymentDetails = {
      planType: 'SMS Recharge',
      amount: '0',
    };

    this.route.params.subscribe((param: Params) => {
      this.instituteId = param.id;

      this.user = this.authService.getUser();

      if (!this.user) {
        this.location.back();
        return;
      }
    });

    this.options = {
      key: environment.razorpayKeyId, // Enter the Key ID generated from the Dashboard
      amount: '', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'eduatlas',
      description: 'Test Transaction',
      image: '../../../assets/img/EA FAVI.png',
      // tslint:disable-next-line: max-line-length
      order_id: '', // This is a sample Order ID. Pass the `id` obtained in the response of Step 1 order_9A33XWu170gUtm
      handler: (response: any) => {
        this.verifyPayment(response);
      },
      modal: {
        ondismiss: () => {
          this.deleteOrder();
        },
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        address: 'Eduatlas Office',
      },
      theme: {
        color: '#ffd500',
      },
    };

    this.razorPay = new Razorpay(this.options);

    this.smsPacks = [];
    this.smsRechargeService.getSmsPacks().subscribe((res: any) => {
      this.smsPacks = res;
      this.getInstitute(this.instituteId);
    });
  }

  getInstitute(id: any) {
    this.api.getInstitute(id).subscribe(
      (res: any) => {
        this.display = true;
      },
      (err: any) => {
        // this.showToast('top-right', 'danger', 'Invalid Institute');
        // this.back();
      },
    );
  }

  pay() {
    this.razorPay.open();
  }

  generateOrder(order: any) {
    this.paymentService.generateOrder(order).subscribe(
      (res: any) => {
        this.placedOrderReceipt = res.receipt;
        // this.options.amount = res.order.amount;
        this.options.amount = '1';
        this.options.order_id = res.order.id;
        this.options.currency = res.order.currency;
        this.options.prefill.name = this.user.name;
        this.options.prefill.email = this.user.email;
        this.options.prefill.contact = this.user.phone;
        this.razorPay = new Razorpay(this.options);
        this.pay();
      },
      (err) => {
        this.showToast('top-right', 'danger', err.error.message || 'Order Generation Failed');
      },
    );
  }

  verifyPayment(payment: any) {
    this.paymentService.verifyPayment(payment, this.placedOrderReceipt).subscribe(
      (res: any) => {
        this.showToast('top-right', 'success', 'Payment Verified Successfully');
        setTimeout(() => {
          // this.addInstituteAfterPayment(this.institute, res.orderId, res.receiptId);
          this.addSms();
        }, 1000);
      },
      (err: any) => {
        this.showToast('top-right', 'danger', err.error.message || 'Payment Verification Failed');
      },
    );
  }

  addSms() {
    this.smsRechargeService.rechargeSms(this.instituteId, this.smsPack._id).subscribe(
      (data) => {
        // this.user = data;
        this.showToast('top-right', 'success', 'SMS Recharge Successful');
        setTimeout(() => {
          this.router.navigate(['/pages/dashboard/', this.instituteId], { relativeTo: this.route });
        }, 1000);
      },
      (error) => {
        this.showToast('top-right', 'danger', error.message || 'Something bad happened');
      },
    );
  }

  deleteOrder() {
    this.paymentService.deleteOrder(this.placedOrderReceipt._id).subscribe(
      (res: any) => {
        this.placedOrderReceipt = null;
      },
      (err) => {},
    );
  }

  onCheckout() {
    this.checkout = true;
  }

  getAmount(amount: any) {
    return (+amount * 1).toFixed(2);
  }

  submitCheckout(event: any) {
    this.cancelCheckout();
    const orderDetails = {
      packId: this.smsPack._id,
      userId: this.user._id,
      userPhone: this.user.phone,
      userName: this.user.name,
      userEmail: this.user.email,
      amount: this.paymentDetails.amount,
      planType: this.paymentDetails.planType,
      amountType: 'new',
    };
    this.generateOrder(orderDetails);
  }

  cancelCheckout() {
    this.checkout = false;
  }

  onRecharge(smsPack: any) {
    this.smsPack = smsPack;
    this.paymentDetails.amount = smsPack.totalAmount;
    this.onCheckout();
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }

  back() {
    this.location.back();
  }
}
