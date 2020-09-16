import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../../services/api.service';

@Component({
  selector: 'ngx-manage-online-class',
  templateUrl: './manage-online-class.component.html',
  styleUrls: ['./manage-online-class.component.scss'],
})
export class ManageOnlineClassComponent implements OnInit {
  institute: any;
  instituteId: string;
  batches: any[] = [];
  display: boolean;
  courseId: string;
  batch: string;

  meetings: any[];

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
    private router: Router,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.display = false;
    this.meetings = [];
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getCourses(this.instituteId);
  }

  getCourses(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      this.display = true;
    });
  }

  month(time: string) {
    const month = time.split('T')[0].split('-')[1];
    return this.months[+month - 1];
  }

  day(time: string) {
    return time.split('T')[0].split('-')[2];
  }

  onSelectCourse(id: string) {
    this.courseId = id;
    this.batches = this.institute.batch.filter((b: any) => b.course === id);
  }

  onSelectBatch(batchId: string) {
    this.batch = batchId;
    this.getUpcomingClasses(this.instituteId, batchId);
  }

  goLive(startUrl: string) {
    window.open(
      startUrl,
      '_system',
      'scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no',
    );
  }

  notify(id: any) {
    this.api.notifyMeeting({ _id: id }).subscribe(
      (res: any) => {},
      (err) => {},
    );
  }

  edit(id: string) {
    this.router.navigate(
      [`/pages/institute/online-classes/create-class/${this.instituteId}/edit`],
      {
        queryParams: { meeting: id, edit: 'true' },
      },
    );
  }

  deleteMeeting(id: string, meetingId: string) {
    this.api.deleteMeeting({ _id: id, meetingId: meetingId }).subscribe(
      (res: any) => {
        const i = this.meetings.findIndex((meeting: any) => meeting._id === id);
        this.meetings.splice(i, 1);
      },
      (err) => {},
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
        (err) => {
          this.showToast('top-right', 'danger', err.err.message);
        },
      );
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
}
