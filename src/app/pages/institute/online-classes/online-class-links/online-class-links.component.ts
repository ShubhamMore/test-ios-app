import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { MeetingService } from '../../../../services/meeting.service';

@Component({
  selector: 'ngx-online-class-links',
  templateUrl: './online-class-links.component.html',
  styleUrls: ['./online-class-links.component.scss'],
})
export class OnlineClassLinksComponent implements OnInit {
  institute: any;
  instituteId: string;
  batches: any[] = [];
  display: boolean;
  courseId: string;
  batch: string;

  meetingDetails: any;
  uploadClassRecording: boolean;
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
    private router: Router,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.display = false;
    this.upcomingMeetings = [];
    this.previousMeetings = [];
    this.uploadClassRecording = false;
    this.viewClassRecording = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getCourses(this.instituteId);
    this.getClasses(this.instituteId, null, null);
  }

  getCourses(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      this.display = true;
    });
  }

  month(date: string) {
    const month = date.split('-')[1];
    return this.months[+month - 1];
  }

  day(date: string) {
    return date.split('-')[2];
  }

  onSelectCourse(id: string) {
    this.courseId = id;
    if (this.courseId !== '') {
      this.batches = this.institute.batch.filter((b: any) => b.course === id);
    } else {
      this.getClasses(this.instituteId, null, null);
    }
  }

  onSelectBatch(batchId: string) {
    this.batch = batchId;
    if (batchId !== '') {
      this.getClasses(this.instituteId, this.courseId, batchId);
    } else {
      this.getClasses(this.instituteId, this.courseId, null);
    }
  }

  start(link: string) {
    window.open(
      link,
      '_system',
      'scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no',
    );
  }

  edit(id: string) {
    this.router.navigate(
      [`/pages/institute/online-classes/create-class-link/${this.instituteId}/edit`],
      {
        queryParams: { meeting: id, edit: 'true' },
      },
    );
  }

  deleteMeeting(id: string, type: string) {
    this.meetingService.deleteMeetingLink({ _id: id }).subscribe(
      (res: any) => {
        if (type === 'upcoming') {
          const i = this.upcomingMeetings.findIndex((meeting: any) => meeting._id === id);
          if (i >= 0) {
            this.upcomingMeetings.splice(i, 1);
          }
        } else {
          const i = this.previousMeetings.findIndex((meeting: any) => meeting._id === id);
          if (i >= 0) {
            this.previousMeetings.splice(i, 1);
          }
        }
      },
      (err) => {},
    );
  }

  deleteClassRecording(data: any) {
    const i = this.previousMeetings.findIndex((meeting: any) => meeting._id === data._id);
    if (i >= 0) {
      const ri = this.previousMeetings[i].recordings.findIndex(
        (recording: any) => recording._id === data.recordingId,
      );
      if (ri >= 0) {
        this.previousMeetings[i].recordings.splice(ri, 1);
      }
    }
  }

  viewRecording(meeting: any) {
    this.meetingDetails = meeting;
    this.viewClassRecording = true;
  }

  uploadRecording(meeting: any) {
    this.meetingDetails = meeting;
    this.uploadClassRecording = true;
  }

  closeUploadRecording() {
    this.uploadClassRecording = false;
    this.meetingDetails = null;
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
