import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { MeetingService } from '../../../services/meeting.service';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'ngx-online-class-link',
  templateUrl: './online-class-link.component.html',
  styleUrls: ['./online-class-link.component.scss'],
})
export class OnlineClassLinkComponent implements OnInit {
  instituteId: string;
  courses: any[] = [];
  batchId: string;
  display: boolean;
  courseId: string;
  batch: string;

  meetingDetails: any;
  viewClassRecording: boolean;

  upcomingMeetings: any[];
  previousMeetings: any[];

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
    private api: ApiService,
    private meetingService: MeetingService,
    private studentService: StudentService,
    private router: Router,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.display = false;
    this.upcomingMeetings = [];
    this.previousMeetings = [];
    this.viewClassRecording = false;
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

  month(date: string) {
    const month = date.split('-')[1];
    return this.months[+month - 1];
  }

  day(date: string) {
    return date.split('-')[2];
  }

  onSelectCourse(id: string) {
    if (id !== '') {
      this.courseId = id;
      const course = this.courses.find((curCourse: any) => curCourse._id === id);
      this.batchId = course.batchId;
      this.getClasses(this.instituteId, this.courseId, this.batchId);
    }
  }

  start(link: string) {
    window.open(
      link,
      '_system',
      'scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no',
    );
  }

  viewRecording(meeting: any) {
    this.meetingDetails = meeting;
    this.viewClassRecording = true;
  }

  closeViewRecording() {
    this.viewClassRecording = false;
    this.meetingDetails = null;
  }

  createTime(time: any) {
    if (!time) {
      return '--';
    }
    time = time.split(':');
    let hours = +time[0];
    const minute = time[1];
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    if (hours === 0) {
      hours = 12;
    } else if (hours >= 12) {
      hours -= 12;
    }

    return hours.toString().padStart(2, '0') + ':' + minute + ' ' + meridiem;
  }

  createDate(date: string) {
    return date.split('-').reverse().join('-');
  }

  getClasses(instituteId: any, courseId: any, batchId: any) {
    this.meetingService
      .getMeetingLinkByBatch({ instituteId: instituteId, courseId: courseId, batchId: batchId })
      .subscribe(
        (res: any) => {
          this.upcomingMeetings = res.upcomingMeetings;
          this.previousMeetings = res.previousMeetings;
        },
        (err) => {
          this.showToast('top-right', 'danger', err.err.message);
        },
      );
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
}
