import { PaymentService } from './../../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../pages-menu';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Location } from '@angular/common';
import { AuthService } from './../../services/auth-services/auth.service';
import { ApiService } from './../../services/api.service';
import { environment } from './../../../environments/environment';
import { NbToastrService } from '@nebular/theme';

declare var Razorpay: any;

@Component({
  selector: 'ngx-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent implements OnInit {
  display: boolean;
  plans: any[];
  lite: any;
  litePlus: any;
  value: any;
  power: any;

  options: any;
  razorPay: any;
  placedOrderReceipt: any;
  instituteId: string;
  paymentDetails: any;
  user: any;

  couponCode: string;
  checkout: boolean;

  type: any;
  memberShipTypes: string[] = ['new', 'renew'];

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
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
    this.route.queryParams.subscribe((param: Params) => {
      this.type = param.type;
      this.instituteId = param.id;

      this.user = this.authService.getUser();

      if (!this.user || !this.memberShipTypes.includes(this.type)) {
        this.location.back();
        return;
      }
    });
    this.plans = [];
    MENU_ITEMS[1].hidden = false;
    MENU_ITEMS[2].hidden = true;
    MENU_ITEMS[3].hidden = true;
    MENU_ITEMS[4].hidden = true;
    MENU_ITEMS[5].hidden = true;
    MENU_ITEMS[6].hidden = true;
    MENU_ITEMS[7].hidden = true;
    MENU_ITEMS[8].hidden = true;
    MENU_ITEMS[9].hidden = true;
    MENU_ITEMS[10].hidden = true;
    MENU_ITEMS[11].hidden = true;
    MENU_ITEMS[12].hidden = true;
    MENU_ITEMS[13].hidden = true;
    MENU_ITEMS[14].hidden = true;
    MENU_ITEMS[15].hidden = true;
    MENU_ITEMS[16].hidden = true;

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

    this.menuService.setMenuSeqList();
    this.getPlans();
  }

  getPlans() {
    this.paymentService.getAllPlans().subscribe((res: any) => {
      this.plans = res;
      this.lite = this.plans.find((plan: any) => plan.planType.toUpperCase() === 'LITE');
      this.litePlus = this.plans.find((plan: any) => plan.planType.toUpperCase() === 'LITE PLUS');
      this.value = this.plans.find((plan: any) => plan.planType.toUpperCase() === 'VALUE');
      this.power = this.plans.find((plan: any) => plan.planType.toUpperCase() === 'POWER');
      if (this.type !== 'new' && this.instituteId) {
        this.getInstitute(this.instituteId);
      } else {
        this.display = true;
      }
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
        this.showToast('top-right', 'success', 'Institute Activated Successfully');
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

  onCheckout() {
    this.checkout = true;
  }

  submitCheckout(event: any) {
    this.couponCode = event;
    this.cancelCheckout();
    const orderDetails = {
      userId: this.user._id,
      userPhone: this.user.phone,
      userName: this.user.name,
      userEmail: this.user.email,
      amount: this.paymentDetails.amount,
      planType: this.paymentDetails.planType,
      couponCode: this.couponCode,
      amountType: 'new',
    };
    if (this.paymentDetails.amount === '0') {
      this.activateInstitute(this.instituteId, null, null);
    } else {
      this.generateOrder(orderDetails);
    }
  }

  cancelCheckout() {
    this.checkout = false;
  }

  activate(plan: any) {
    const amount = plan.amount;
    const planType = plan.planType;

    this.paymentService.setPaymentDetails(amount, planType);
    this.paymentDetails = this.paymentService.getPaymentDetails();

    if (this.type === 'new') {
      this.router.navigate(['/pages/institute/add-institute'], { relativeTo: this.route });
    } else if (this.type === 'renew' && this.instituteId) {
      this.onCheckout();
    } else {
      this.showToast('top-right', 'danger', 'Invalid Payment Type or Institute');
    }
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
