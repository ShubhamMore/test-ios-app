import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ngx-manage-receipt',
  templateUrl: './manage-receipt.component.html',
  styleUrls: ['./manage-receipt.component.scss'],
})
export class ManageReceiptComponent implements OnInit {
  receipts = { businessName: '', address: '', fee: '', gstNumber: '', termsAndCondition: '' };
  instituteId: string;
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit() {
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getReceipts(this.instituteId);
  }

  getReceipts(id: string) {
    this.api.getReceipt(id).subscribe((data) => {
      this.receipts = JSON.parse(JSON.stringify(data));
    });
  }

  edit(id: string) {
    this.router.navigate([`/pages/institute/branch-config/add-receipt/${this.instituteId}`], {
      queryParams: { recieptId: id, edit: true },
    });
  }

  delete(id: string) {
    const confirm = window.prompt('Are u sure, You want to delete this Receipt?');
    if (confirm) {
      this.api.deleteReceipt(id).subscribe(
        () => {
          this.receipts = null;
          this.showToast('top-right', 'success', 'Receipt Deleted Successfully');
        },
        (err) => console.error(err),
      );
    }
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }

  onClick() {
    this.router.navigate([`/pages/institute/branch-config/add-receipt/${this.instituteId}`]);
  }
}
