import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ApiService } from '../../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ngx-manage-batch',
  templateUrl: './manage-batch.component.html',
  styleUrls: ['./manage-batch.component.scss'],
})
export class ManageBatchComponent implements OnInit {
  batches: any[];
  instituteId: string;
  params = new HttpParams();
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit() {
    this.batches = [];
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getBatches(this.instituteId);
  }

  getBatches(id: any) {
    this.api.getBatches(id).subscribe((res: any) => {
      this.batches = res.batch;
    });
  }

  edit(id: string) {
    this.router.navigate([`/pages/institute/branch-config/add-batch/${this.instituteId}`], {
      queryParams: { batchId: id, edit: true },
    });
  }

  delete(id: string) {
    this.params = this.params.append('instituteId', this.instituteId);
    this.params = this.params.append('batchId', id);
    this.api.deleteBatch(this.params).subscribe(
      (res) => {},
      (err) => console.error(err),
    );
    const i = this.batches.findIndex((e) => e._id === id);
    if (i !== -1) {
      this.batches.splice(i, 1);
    }
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }

  onClick() {
    this.router.navigate(['/pages/institute/branch-config/add-batch', this.instituteId]);
  }
}
