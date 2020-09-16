import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss'],
})
export class ManageEmployeeComponent implements OnInit {
  institute: any;
  form: FormGroup;

  courses: any[];
  course: string;

  batches: any[];

  employees = [];
  instituteId: string;

  constructor(private api: ApiService, private router: Router, private active: ActivatedRoute) {}

  ngOnInit() {
    this.employees = [];
    this.course = '';
    this.form = new FormGroup({
      course: new FormControl('', { validators: [] }),
      batch: new FormControl('', { validators: [] }),
    });
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.getEmployees(this.instituteId);
  }

  getEmployees(instituteId: string) {
    this.api.getEmployeesByInstituteId(instituteId).subscribe((data: any) => {
      this.employees = data;
    });
  }

  view(eduAtlasId: string, employeeObjId: string) {
    this.router.navigate([`/pages/institute/branch-config/view-employee/${this.instituteId}`], {
      queryParams: { eduAtlasId, employeeObjId },
    });
  }

  edit(eduAtlasId: string, employeeObjId: string) {
    this.router.navigate([`/pages/institute/branch-config/add-employee/${this.instituteId}/edit`], {
      queryParams: { eduAtlasId, employeeObjId, edit: 'true' },
    });
  }

  delete(employeeObjId: string) {
    const confirm = window.confirm('Are u sure, You want to Delete this Employee?');
    if (confirm) {
      this.api.deleteEmployeeInstitute(this.instituteId, employeeObjId).subscribe(() => {
        const i = this.employees.findIndex((employee) => employee._id === employeeObjId);
        if (i !== -1) {
          this.employees.splice(i, 1);
        }
      });
    }
  }
  onClick() {
    this.router.navigate([`/pages/institute/branch-config/add-employee/${this.instituteId}`]);
  }
}
