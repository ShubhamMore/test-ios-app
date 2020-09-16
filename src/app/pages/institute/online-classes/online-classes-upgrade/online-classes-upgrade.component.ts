import { PaymentService } from './../../../../services/payment.service';
import { Location } from '@angular/common';
import { AuthService } from './../../../../services/auth-services/auth.service';
import { ApiService } from './../../../../services/api.service';
import { environment } from './../../../../../environments/environment';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RoleAssignService } from '../../../../services/role/role-assign.service';

declare var Razorpay: any;
@Component({
  selector: 'ngx-online-classes-upgrade',
  templateUrl: './online-classes-upgrade.component.html',
  styleUrls: ['./online-classes-upgrade.component.scss'],
})
export class OnlineClassesUpgradeComponent implements OnInit {
  role: any;
  display: boolean;
  plans: any[];
  upgradeToLitePlus: any;
  upgradeToValue: any;
  upgradeToPower: any;
  options: any;
  razorPay: any;
  placedOrderReceipt: any;
  instituteId: string;
  paymentDetails: any;
  user: any;
  constructor(
    private roleService: RoleAssignService,
    private route: ActivatedRoute,
    private api: ApiService,
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private toastrService: NbToastrService,
    private paymentService: PaymentService,
  ) {}

  ngOnInit() {
    this.display = false;
    this.role = this.roleService.getRole();
    this.route.params.subscribe((param: Params) => {
      this.instituteId = param.id;
    });

    this.user = this.authService.getUser();

    if (!this.user) {
      this.location.back();
      return;
    }

    this.options = {
      key: environment.razorpayKeyId, // Enter the Key ID generated from the Dashboard
      amount: '', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'eduatlas',
      description: 'Test Transaction',
      image: 'assets/img/EA FAVI.png',
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

    this.getPlans();
  }

  getPlans() {
    this.paymentService.getAllPlans().subscribe((res: any) => {
      this.plans = res;
      this.upgradeToLitePlus = this.plans.find(
        (plan: any) => plan.planType.toUpperCase() === 'LITE PLUS',
      );
      this.upgradeToValue = this.plans.find((plan: any) => plan.planType.toUpperCase() === 'VALUE');
      this.upgradeToPower = this.plans.find((plan: any) => plan.planType.toUpperCase() === 'POWER');
      this.getInstitute(this.instituteId);
    });
  }

  getInstitute(id: any) {
    this.api.getInstitute(id).subscribe(
      (res: any) => {
        this.display = true;
      },
      (err: any) => {
        this.showToast('top-right', 'danger', 'Invalid Institute');
        this.back();
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
          this.activateInstitute(this.instituteId, res.orderId, res.receiptId);
        }, 1000);
      },
      (err: any) => {
        this.showToast('top-right', 'danger', err.error.message || 'Payment Verification Failed');
      },
    );
  }

  openUrl(url: any) {
    window.open(url, '_system');
  }

  activateInstitute(id: string, orderId: string, ReceiptId: string) {
    const paymentDetails = {
      amount: this.paymentDetails.amount,
      planType: this.paymentDetails.planType,
      orderId: orderId,
      receiptId: ReceiptId,
    };
    this.api.activateInstitute(id, paymentDetails).subscribe(
      (data) => {
        // this.user = data;
        this.showToast('top-right', 'success', 'Institute Upgraded Successfully');
        setTimeout(() => {
          this.router.navigate(['/pages/home'], { relativeTo: this.route });
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

  activate(plan: any) {
    const amount = plan.upgradeAmount;
    const planType = plan.planType;

    this.paymentService.setPaymentDetails(amount, planType);
    this.paymentDetails = this.paymentService.getPaymentDetails();

    const orderDetails = {
      userId: this.user._id,
      userPhone: this.user.phone,
      userName: this.user.name,
      userEmail: this.user.email,
      amount: this.paymentDetails.amount,
      planType: this.paymentDetails.planType,
      amountType: 'upgrade',
    };
    this.generateOrder(orderDetails);
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
