import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-manage-ptms',
  templateUrl: './manage-ptms.component.html',
  styleUrls: ['./manage-ptms.component.scss'],
})
export class ManagePTMsComponent implements OnInit {
  instituteId: string;
  ptmList: [];
  display: boolean;

  constructor(
    private api: ApiService,
    private router: Router,
    private active: ActivatedRoute,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.display = false;
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.api.getPtmByInstitute({ instituteId: this.instituteId }).subscribe(
      (res: any) => {
        this.ptmList = res;
        this.display = true;
      },
      (err) => {},
    );
  }

  addPtms() {
    this.router.navigate(['/pages/student-reports/add-ptms/', this.instituteId]);
  }
  edit(ptmId) {
    this.router.navigate(['/pages/student-reports/add-ptms/', this.instituteId], {
      queryParams: { ptmId, edit: true },
    });
  }
  delete(id, index) {
    this.api.deletePtm({ _id: id }).subscribe(
      (res) => {
        this.ptmList.splice(index, 1);
        this.showToast('top-right', 'success', 'PTMs Deleted Successfully');
      },
      (err) => {
        this.showToast('top-right', 'danger', 'PTMs Deletion Failed');
      },
    );
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
