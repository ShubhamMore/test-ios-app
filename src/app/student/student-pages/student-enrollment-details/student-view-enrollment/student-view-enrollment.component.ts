import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-student-view-enrollment',
  templateUrl: './student-view-enrollment.component.html',
  styleUrls: ['./student-view-enrollment.component.scss'],
})
export class StudentViewEnrollmentComponent implements OnInit {
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

  back() {
    this.location.back();
  }

  openUrl(url: any) {
    window.open(url, '_system');
  }

  // Show Toaster
  showToaster(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
