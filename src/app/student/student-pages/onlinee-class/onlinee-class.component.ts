import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'ngx-onlinee-class',
  templateUrl: './onlinee-class.component.html',
  styleUrls: ['./onlinee-class.component.scss'],
})
export class OnlineeClassComponent implements OnInit {
  institute: any;
  instituteId: string;
  courses: any[] = [];
  display: boolean;

  meetings: any[];

  courseId: any = '';
  batchId: any;

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

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private api: ApiService,
  ) {}

  ngOnInit(): void {
    this.display = false;
    this.meetings = [];
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

  month(time: string) {
    const month = time.split('T')[0].split('-')[1];
    return this.months[+month - 1];
  }

  day(time: string) {
    return time.split('T')[0].split('-')[2];
  }

  onSelectCourse(id: string) {
    if (id !== '') {
      this.courseId = id;

      const course = this.courses.find((curCourse: any) => curCourse._id === id);
      this.batchId = course.batchId;

      this.getUpcomingClasses(this.instituteId, this.batchId);
    }
  }

  joinMeeting(joinUrl: string) {
    window.open(
      joinUrl,
      '_system',
      'scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no',
    );
  }

  createTime(time: string) {
    const dateTime = time.split('T');
    return dateTime[0] + ' ' + dateTime[1].substring(0, 5);
  }

  getUpcomingClasses(instituteId: any, batchId: any) {
    this.api
      .getMeetingByBatch({ instituteId: instituteId, batchId: batchId, type: 'upcoming' })
      .subscribe(
        (res: any) => {
          this.meetings = res;
        },
        (err) => {},
      );
  }
}
