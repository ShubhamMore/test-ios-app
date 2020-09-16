import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'ngx-manage-discount',
  templateUrl: './manage-discount.component.html',
  styleUrls: ['./manage-discount.component.scss'],
})
export class ManageDiscountComponent implements OnInit {
  discounts: any[];
  instituteId: string;
  constructor(
    private api: ApiService,
    private router: Router,
    private active: ActivatedRoute,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit() {
    this.discounts = [];
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.getDiscounts(this.instituteId);
  }

  getDiscounts(id: string) {
    this.api.getDiscounts(id).subscribe(
      (data: any) => {
        this.discounts = data.discount;
      },
      (err) => console.error(err),
    );
  }

  edit(id: string) {
    this.router.navigate([`/pages/institute/branch-config/add-discount/${this.instituteId}`], {
      queryParams: { discountId: id, edit: true },
    });
  }

  delete(id: string) {
    const confirm = window.confirm('Are u sure, you want to Delete This Discount?');
    if (confirm) {
      let param = new HttpParams();
      param = param.append('instituteId', this.instituteId);
      param = param.append('discountId', id);
      this.api.deleteDiscount(param).subscribe((err) => console.error(err));
      const i = this.discounts.findIndex((e) => e._id === id);
      if (i !== -1) {
        this.discounts.splice(i, 1);
        this.showToast('top-right', 'success', 'Discount Deleted Successfully!');
      }
    }
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }

  onClick() {
    this.router.navigate(['/pages/institute/branch-config/add-discount/', this.instituteId]);
  }
}
