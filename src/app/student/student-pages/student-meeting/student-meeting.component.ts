import { StudentService } from './../../../services/student.service';
import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-student-meeting',
  templateUrl: './student-meeting.component.html',
  styleUrls: ['./student-meeting.component.scss'],
})
export class StudentMeetingComponent implements OnInit {
  instituteId: string;
  courses: any[] = [];
  courseId: string = '';
  batchId: string;
  pastMeetings: any[] = [];
  upcomingMeetings: any[] = [];
  display: boolean;
  constructor(
    private studentService: StudentService,
    private toasterService: NbToastrService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getBatchesOfCourses(this.instituteId);
  }

  getBatchesOfCourses(instituteId: any) {
    this.studentService.getStudentCoursesByInstitutes(instituteId).subscribe(
      (res: any[]) => {
        this.courses = res;
        if (this.courses.length > 0) {
          this.courseId = this.courses[0]._id;
          this.onSelectCourse(this.courseId);
        }
        this.display = true;
      },
      (err: any) => {},
    );
  }

  onSelectCourse(id: string) {
    if (id !== '') {
      this.courseId = id;

      const course = this.courses.find((curCourse: any) => curCourse._id === id);
      this.batchId = course.batchId;

      this.getMentoring({
        instituteId: this.instituteId,
        courseId: this.courseId,
        batchId: this.batchId,
      });
    }
  }

  getMentoring(data: any) {
    this.studentService.getPTMForStudent(data).subscribe((res: any) => {
      this.pastMeetings = res.pastMeetings;
      this.upcomingMeetings = res.upcomingMeetings;
    });
  }

  getTime(time: any) {
    const hour = +time.split(':')[0];
    const min = time.split(':')[1];
    let t = '';
    if (hour > 12) {
      t = (hour - 12).toString() + ':' + min + ' PM';
    } else {
      t = hour.toString() + ':' + min + ' AM';
    }
    return t;
  }

  getDate(date: any) {
    const d = date.split('-');
    return `${d[2]}-${d[1]}-${d[0]}`;
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
