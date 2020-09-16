import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-add-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss'],
})
export class ViewEmployeeComponent implements OnInit {
  employee: any;
  instituteId: string;
  employeeEduId: string;
  employeeObjId: string;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit() {
    this.instituteId = this.route.snapshot.paramMap.get('id');

    this.route.queryParams.subscribe((data) => {
      this.employeeEduId = data.eduAtlasId;
      this.employeeObjId = data.employeeObjId;
    });

    this.getEmployee(this.employeeObjId);
  }
  getEmployee(employeeObjId: string) {
    this.api
      .getOneEmployeeByInstitute({
        empId: employeeObjId,
        instituteId: this.instituteId,
      })
      .subscribe((data) => {
        this.employee = data[0];
      });
  }

  deleteEmployee() {
    const confirm = window.confirm('Are u sure, You want to Delete this Employee?');
    if (confirm) {
      this.api.deleteEmployeeInstitute(this.instituteId, this.employeeObjId).subscribe(() => {
        this.location.back();
      });
    }
  }

  edit() {
    this.router.navigate([`/pages/institute/branch-config/add-employee/${this.instituteId}/edit`], {
      queryParams: {
        eduAtlasId: this.employeeEduId,
        employeeObjId: this.employeeObjId,
        edit: 'true',
      },
    });
  }
}
