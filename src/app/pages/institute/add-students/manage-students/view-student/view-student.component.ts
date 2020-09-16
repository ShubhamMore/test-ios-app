import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'ngx-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss'],
})
export class ViewStudentComponent implements OnInit {
  student: any;
  instituteId: string;
  studentEduId: string;
  courseId: string;
  display: boolean;
  institute: any;

  constructor(
    private api: ApiService,
    private toasterService: NbToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit() {
    this.display = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');

    this.route.queryParams.subscribe((data) => {
      this.studentEduId = data.student;
      this.courseId = data.course;
    });

    this.getCourses();

    this.getStudent(this.studentEduId, this.instituteId, this.courseId);
  }

  getCourses() {
    this.api.getCourseTD(this.instituteId).subscribe((res: any) => {
      this.institute = res;
      this.display = true;
    });
  }

  getCourse(id: any) {
    return this.institute.course.find((course: any) => course._id === id).name;
  }

  getBatch(id: any) {
    if (id !== '') {
      return this.institute.batch.find((batch: any) => batch._id === id).batchCode;
    }
  }

  getStudent(student: string, institute: string, course: string) {
    this.api
      .getOneStudentByInstitute({ eduatlasId: student, instituteId: institute, courseId: course })
      .subscribe((data) => {
        this.student = data[0];
      });
  }

  openUrl(url: any) {
    window.open(url, '_system');
  }

  edit() {
    this.router.navigate([`/pages/institute/add-students/${this.instituteId}/edit`], {
      queryParams: { student: this.studentEduId, course: this.courseId, edit: 'true' },
    });
  }

  deleteStudent() {
    const confirm = window.confirm('Are u sure, You want to delete this Student?');
    if (confirm) {
      this.api
        .deleteStudentCourse(
          this.student.instituteDetails._id,
          this.studentEduId,
          this.student.instituteDetails.instituteId,
          this.courseId,
          this.student._id,
        )
        .subscribe(() => {
          this.location.back();
          this.showToaster('top-right', 'success', 'New Student Deleted Successfully!');
        });
    }
  }
  // Show Toaster
  showToaster(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
