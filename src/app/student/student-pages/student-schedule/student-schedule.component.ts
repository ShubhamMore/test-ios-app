import { StudentService } from './../../../services/student.service';
import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../../../services/schedule/schedule.service';
@Component({
  selector: 'ngx-student-schedule',
  templateUrl: './student-schedule.component.html',
  styleUrls: ['./student-schedule.component.scss'],
})
export class StudentScheduleComponent implements OnInit {
  instituteId: string;
  courses: any[] = [];
  courseId: string;
  batchId: string;
  schedules: any[] = [];

  months: string[] = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  display: boolean;
  constructor(
    private router: Router,
    private studentService: StudentService,
    private scheduleService: ScheduleService,
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

  getMonth(date: string) {
    const month = date.split('-')[1];
    return this.months[+month - 1];
  }

  getDay(date: string) {
    return date.split('-')[2];
  }

  time(time: any) {
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

  onSelectCourse(id: string) {
    if (id !== '') {
      this.courseId = id;

      const course = this.courses.find((curCourse: any) => curCourse._id === id);
      this.batchId = course.batchId;

      this.getSchedules({
        instituteId: this.instituteId,
        courseId: this.courseId,
        batchId: this.batchId,
      });
    }
  }

  getSchedules(data: any) {
    this.scheduleService.getScheduleByInstitute(data).subscribe((res: any) => {
      this.schedules = res;
    });
  }

  viewSchedule(code: any) {
    this.router.navigate(['/student/view-schedule', this.instituteId], {
      queryParams: { schedule: code },
    });
  }

  getScheduleDate(date: any) {
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
