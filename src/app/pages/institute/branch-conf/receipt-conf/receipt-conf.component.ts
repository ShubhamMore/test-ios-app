import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-receipt-conf',
  templateUrl: './receipt-conf.component.html',
  styleUrls: ['./receipt-conf.component.scss'],
})
export class ReceiptConfComponent implements OnInit {
  receipt: FormGroup;
  submitted = false;
  updateReceipt = { businessName: '', address: '', gstNumber: '', termsAndCondition: '', fee: '' };
  instituteId: string;
  receiptId: string;
  edit: string;
  message: string;
  fees = ['Collection Basis', 'Course Fee Basis'];
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private active: ActivatedRoute,
    private router: Router,
    private toasterService: NbToastrService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.active.queryParams.subscribe((data) => {
      this.receiptId = data.receiptId;
      this.edit = data.edit;
      if (this.edit === 'true') {
        this.getReceipt(this.instituteId);
      }
    });
    this.receipt = this.fb.group({
      businessName: ['', Validators.required],
      address: ['', Validators.required],
      termsAndCondition: ['', Validators.required],
      fee: ['Collection Basis'],
      gstNumber: [''],
    });
  }

  get f() {
    return this.receipt.controls;
  }

  getReceipt(id: string) {
    this.api.getReceipt(id).subscribe(
      (data) => {
        this.updateReceipt = data;
        this.receipt.patchValue({
          businessName: this.updateReceipt.businessName,
          address: this.updateReceipt.address,
          gstNumber: this.updateReceipt.gstNumber,
          termsAndCondition: this.updateReceipt.termsAndCondition,
          fee: this.updateReceipt.fee,
        });
      },
      (err) => console.error(err),
    );
  }

  onSubmit() {
    this.submitted = true;
    this.receipt.markAllAsTouched();
    if (this.receipt.invalid) {
      return;
    }
    if (this.edit === 'true') {
      this.api.updateReceipt(this.instituteId, this.receipt.value).subscribe(
        (data) => {
          this.showToast('top-right', 'success', 'receipt Updated Successfully');
          this.router.navigate([
            '/pages/institute/branch-config/manage-receipt/',
            this.instituteId,
          ]);
        },
        (err) => {
          this.showToast('top-right', 'danger', err.error.message);
        },
      );
    }

    if (!this.edit) {
      this.api.addReceipt(this.instituteId, this.receipt.value).subscribe(
        () => {
          this.showToast('top-right', 'success', 'Receipt Added Successfully');
          this.router.navigate([
            '/pages/institute/branch-config/manage-receipt/',
            this.instituteId,
          ]);
        },
        (err) => {
          this.showToast('top-right', 'danger', err.error.message);
        },
      );
    }
  }

  back() {
    let confirm = true;
    if (this.receipt.touched) {
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
