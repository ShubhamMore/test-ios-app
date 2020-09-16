import { NbToastrService } from '@nebular/theme';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-pending-student',
  templateUrl: './pending-student.component.html',
  styleUrls: ['./pending-student.component.scss'],
})
export class PendingStudentComponent implements OnInit {
  institute: any;
  form: FormGroup;
  courses: any[];
  course: string;
  hideHeaders: boolean = false;

  batches: any[];
  searchStudentFilter: string;

  students = [];
  instituteId: string;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit() {
    this.students = [];
    this.course = '';
    this.form = new FormGroup({
      course: new FormControl('', { validators: [] }),
      batch: new FormControl('', { validators: [] }),
    });
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getCourseTd(this.instituteId);
    this.getStudents(this.instituteId, null, null);
  }

  getStudents(id: string, courseId: string, batchId: string) {
    this.api.getPendingStudents(id, courseId).subscribe((data: any) => {
      this.students = data;
      if (data.length === 0) {
      }
    });
  }

  getCourseTd(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      this.courses = data.course;
    });
  }

  onSelectCourse(id: string) {
    this.searchStudentFilter = '';
    this.hideHeaders = false;
    if (id === 'all') {
      this.getStudents(this.instituteId, null, null);
    } else if (id !== '') {
      this.course = id;
      this.getStudents(this.instituteId, id, id);
    }
  }

  view(student: string, course: string) {
    this.router.navigate([`/pages/institute/view-student/${this.instituteId}`], {
      queryParams: { student, course: course },
    });
  }

  edit(student: string, course: string) {
    this.router.navigate([`/pages/institute/add-students/${this.instituteId}/edit`], {
      queryParams: { student, course: course, edit: 'true' },
    });
  }

  delete(eduAtlId: string, instituteDetailsObjId: string, course: string, studentObjId: string) {
    const confirm = window.confirm('Are u sure, You want to delete this Student?');
    if (confirm) {
      this.api
        .deleteStudentCourse(
          instituteDetailsObjId,
          eduAtlId,
          this.instituteId,
          course,
          studentObjId,
        )
        .subscribe(() => {
          const i = this.students.findIndex(
            (student) => student.instituteDetails._id === instituteDetailsObjId,
          );
          if (i !== -1) {
            this.students.splice(i, 1);
            this.showToaster('top-right', 'success', 'Student Deleted Successfully!');
          }
        });
    }
  }

  filterPendingStudents() {
    let totalCount = this.students.length;
    this.students = this.students.map((student) => {
      if (
        student.basicDetails.name.toLowerCase().includes(this.searchStudentFilter.toLowerCase())
      ) {
        this.hideHeaders = false;
        student.filterOut = false;
        return student;
      } else {
        totalCount--;
        student.filterOut = true;
        if (totalCount === 0) {
          this.hideHeaders = true;
        }
        return student;
      }
    });
  }

  showToaster(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
