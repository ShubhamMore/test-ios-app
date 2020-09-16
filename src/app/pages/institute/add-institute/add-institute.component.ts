import { PaymentService } from './../../../services/payment.service';
import { AuthService } from './../../../services/auth-services/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { CountryService } from '../../../services/country.service';
import { MENU_ITEMS } from '../../pages-menu';
import { environment } from '../../../../environments/environment';
import { NbToastrService, NbStepperComponent } from '@nebular/theme';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MenuService } from '../../../services/menu.service';
import { Location } from '@angular/common';

declare var Razorpay: any;
@Component({
  selector: 'ngx-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.scss'],
})
export class AddInstituteComponent implements OnInit {
  @ViewChild('stepper', { static: false }) stepper: NbStepperComponent;
  @ViewChild('pickedFile', { static: false }) pickedFile: ElementRef;

  display: boolean;

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  paymentDetails: any;

  imageRequired: boolean;

  couponCode: string;
  checkout: boolean;

  user: any;

  options: any;
  razorPay: any;
  placedOrderReceipt: any;

  institute = {
    name: '',
    logo: null,
    instituteContact: '',
    address: { addressLine: '', city: '', state: '', pincode: '' },
    category: [''],
    instituteMetaTag: [''],
  };

  submitted = false;
  inputValue: string;

  myInstitute: any;

  logo: File;
  imagePreview: string;
  invalidImage: boolean;

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  edit: string;
  instituteId: string;

  category = [
    { id: 1, name: 'Pre School' },
    { id: 2, name: 'School' },
    { id: 3, name: 'Tuition Centers' },
    { id: 4, name: 'Coaching Centers' },
    { id: 5, name: 'Hobby Centers' },
    { id: 6, name: 'Enhanced learning' },
    { id: 7, name: 'Sports Centers' },
  ];

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private country: CountryService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService,
    private paymentService: PaymentService,
    private authService: AuthService,
    private menuService: MenuService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.display = true;
    this.invalidImage = false;
    this.imageRequired = false;
    this.checkout = false;
    this.user = this.authService.getUser();
    this.paymentDetails = this.paymentService.getPaymentDetails();

    if (!this.user || !this.paymentDetails) {
      this.showToast('top-right', 'danger', 'Invalid Payment');
      this.location.back();
      return;
    }

    this.route.queryParams.subscribe((param: Params) => {
      this.edit = param.edit;
      this.instituteId = param.instituteId;
    });

    if (!this.edit) {
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
            this.deleteInstitute();
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
    }

    this.firstForm = this.fb.group({
      name: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      instituteContact: ['', { validators: [Validators.required] }],
      address: this.fb.group({
        addressLine: [''],
        locality: [''],
        city: [''],
        state: [''],
        pincode: [''],
      }),
    });

    this.thirdForm = this.fb.group({
      category: [['']],
      instituteMetaTag: this.fb.array([this.fb.control('')]),
    });

    MENU_ITEMS[2].hidden = true;
    MENU_ITEMS[3].hidden = true;
    MENU_ITEMS[4].hidden = true;
    MENU_ITEMS[1].hidden = false;
    this.menuService.setMenuSeqList();
    this.getCountries();
  }

  pay() {
    this.razorPay.open();
  }

  deleteOrder() {
    this.paymentService.deleteOrder(this.placedOrderReceipt._id).subscribe(
      (res: any) => {
        this.placedOrderReceipt = null;
      },
      (err) => {},
    );
  }

  deleteInstitute() {
    this.api.deleteInstitute(this.instituteId).subscribe(
      (res: any) => {
        this.instituteId = null;
      },
      (err: any) => {},
    );
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
          this.router.navigate(['/pages/home']);
        }, 1000);
      },
      (error) => {
        this.showToast('top-right', 'danger', error.message || 'Something bad happened');
      },
    );
  }

  addInstitute(institute: any) {
    this.api.addInstitute(institute).subscribe(
      (data) => {
        if (data.instituteId) {
          this.instituteId = data.instituteId;
          // this.showToast('top-right', 'success', 'Institute Added Successfully, Make Your Payment');

          const orderDetails = {
            userId: this.user._id,
            userPhone: this.user.phone,
            userName: this.user.name,
            userEmail: this.user.email,
            amount: this.paymentDetails.amount,
            planType: this.paymentDetails.planType,
            amountType: 'new',
          };
          this.generateOrder(orderDetails);
          // setTimeout(() => {
          //   this.router.navigate(['/pages/home']);
          // }, 1000);
        } else {
          this.showToast('top-right', 'danger', 'Something bad happened');
        }
      },
      (error) => {
        this.showToast('top-right', 'danger', error.message || 'Something bad happened');
      },
    );
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];

    const imgExt: string[] = ['jpg', 'png'];
    const ext = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
    if (!(imgExt.indexOf(ext) !== -1)) {
      this.invalidImage = true;
      return;
    }
    this.imageRequired = false;
    this.invalidImage = false;
    this.logo = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  getInstitute(id: any) {
    this.api.getInstitute(id).subscribe((data: any) => {
      this.myInstitute = data;

      this.firstForm.patchValue({
        name: this.myInstitute.institute.basicInfo.name,
      });

      this.imagePreview = this.myInstitute.institute.basicInfo.logo.secure_url;

      this.secondForm.patchValue({
        instituteContact: this.myInstitute.institute.basicInfo.instituteContact,
        address: {
          addressLine: this.myInstitute.institute.address.addressLine,
          locality: this.myInstitute.institute.address.locality,
          state: this.myInstitute.institute.address.state,
          pincode: this.myInstitute.institute.address.pincode,
        },
      });

      if (this.myInstitute.institute.address.state) {
        this.onChangeState(this.myInstitute.institute.address.state);
      }

      setTimeout(() => {
        this.secondForm.patchValue({
          address: {
            city: this.myInstitute.institute.address.city,
          },
        });
      }, 2000);

      this.thirdForm.patchValue({
        category: this.myInstitute.institute.category,
      });

      this.thirdForm.get('instituteMetaTag').setValue([this.myInstitute.institute.metaTag[0]]);
      this.myInstitute.institute.metaTag.forEach((tag: any, i: any) => {
        if (i !== 0) {
          this.instituteMetaTag.push(this.fb.control(this.myInstitute.institute.metaTag[i]));
        }
      });
    });

    this.display = false;
  }

  getCountries() {
    this.country.allCountries().subscribe(
      (data) => {
        this.countryInfo = data.Countries;
        this.stateInfo = this.countryInfo[100].States;
        this.cityInfo = this.stateInfo[0].Cities;
        if (this.edit) {
          this.getInstitute(this.instituteId);
        } else {
          this.display = false;
        }
      },
      (err) => {
        this.showToast('top-right', 'danger', err.error.message || 'Cant fetch Countries');
        this.display = false;
      },
    );
  }

  onChangeState(stateValue: any) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
  }

  get instituteMetaTag() {
    return this.thirdForm.get('instituteMetaTag') as FormArray;
  }

  addMetaTag(i: number) {
    this.instituteMetaTag.controls.splice(i + 1, 0, this.fb.control(''));
  }

  removeMetaTag(i: number) {
    this.instituteMetaTag.controls.splice(i, 1);
  }

  get first() {
    return this.firstForm.controls;
  }

  get second() {
    return this.secondForm.controls;
  }

  get third() {
    return this.thirdForm.controls;
  }

  firstFormSubmit() {
    this.firstForm.markAsDirty();
    this.institute.name = this.firstForm.value.name;
    if (!this.edit && !this.logo) {
      this.imageRequired = true;
      return;
    }
    if (this.invalidImage) {
      return;
    }
    this.institute.logo = this.logo;
    this.stepper.next();
  }

  secondFormSubmit() {
    this.secondForm.markAsDirty();
    this.institute.instituteContact = this.secondForm.value.instituteContact;
    this.institute.address = this.secondForm.value.address;
    this.stepper.next();
  }

  onCheckout() {
    this.checkout = true;
  }

  submitCheckout(event: any) {
    this.couponCode = event;
    this.cancelCheckout();
    this.addInstitute(this.institute);
  }

  cancelCheckout() {
    this.checkout = false;
  }

  thirdFormSubmit() {
    this.thirdForm.markAsDirty();
    this.institute.category = this.thirdForm.value.category;
    this.institute.instituteMetaTag = this.thirdForm.value.instituteMetaTag;

    if (this.edit === 'true') {
      this.api.updateInstitute(this.instituteId, this.institute).subscribe(
        (res) => {
          this.showToast('top-right', 'success', 'Institute Updated Successfully');
          setTimeout(() => {
            this.router.navigate(['/pages/home']);
          }, 1000);
        },
        (error) => {
          this.showToast('top-right', 'danger', error.message || 'Something bad happened');
        },
      );
    }

    if (!this.edit) {
      // this.addInstituteAfterPayment(this.institute, '1233', '1234');
      this.onCheckout();
    }
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
}
