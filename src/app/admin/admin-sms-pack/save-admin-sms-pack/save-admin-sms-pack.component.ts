import { SmsPackService } from './../../../services/smspack.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-save-admin-sms-pack',
  templateUrl: './save-admin-sms-pack.component.html',
  styleUrls: ['./save-admin-sms-pack.component.scss'],
})
export class SaveAdminSmsPackComponent implements OnInit {
  smsPack: any;
  form: FormGroup;
  display: boolean;
  edit: any;
  id: any;

  constructor(
    private smsPackService: SmsPackService,
    private fb: FormBuilder,
    private router: Router,
    private toastrService: NbToastrService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;
    this.route.queryParams.subscribe((param: Params) => {
      this.edit = param.edit;
      this.id = param.smsPack;
    });
    this.form = this.fb.group({
      noOfSMS: ['', Validators.required],
      pricePerSMS: ['', Validators.required],
      totalAmount: ['', Validators.required],
    });
    if (this.edit) {
      this.getSmsPack(this.id);
    } else {
      this.display = true;
    }
  }

  getSmsPack(id: any) {
    this.smsPackService.getSmsPack(id).subscribe((res: any) => {
      this.smsPack = res;
      this.form.patchValue({
        noOfSMS: this.smsPack.noOfSMS,
        pricePerSMS: this.smsPack.pricePerSMS,
        totalAmount: this.smsPack.totalAmount,
      });
      this.display = true;
    });
  }

  saveSmsPack() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    const smsPack: any = this.form.value;
    if (this.edit === 'true') {
      smsPack._id = this.id;
      this.smsPackService.updateSmsPack(smsPack).subscribe(
        (res: any) => {
          this.showToast('top-right', 'success', 'smsPack Updated Successfully');
          setTimeout(() => {
            this.router.navigate(['/admin/smspack'], { relativeTo: this.route });
          }, 500);
        },
        (err: any) => {
          this.showToast('top-right', 'danger', err.error.message);
        },
      );
    } else {
      this.smsPackService.addSmsPack(smsPack).subscribe(
        (res: any) => {
          this.showToast('top-right', 'success', 'smsPack Added Successfully');
          setTimeout(() => {
            this.router.navigate(['/admin/smspack'], { relativeTo: this.route });
          }, 500);
        },
        (err: any) => {
          this.showToast('top-right', 'danger', err.error.message);
        },
      );
    }
  }

  onPricePerSms() {
    const noOfSms = +this.form.value.noOfSMS;
    const pricePerSMS = +this.form.value.pricePerSMS;
    const totalAmount = noOfSms * pricePerSMS;
    this.form.patchValue({ totalAmount });
  }

  back() {
    this.router.navigate(['/admin/smspack'], { relativeTo: this.route });
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
}
