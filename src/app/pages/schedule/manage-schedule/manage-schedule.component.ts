import { NbToastrService } from '@nebular/theme';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../../../services/schedule/schedule.service';

@Component({
  selector: 'ngx-manage-schedule',
  templateUrl: './manage-schedule.component.html',
  styleUrls: ['./manage-schedule.component.scss'],
})
export class ManageScheduleComponent implements OnInit {
  instituteId: string;
  institute: any;
  batchId: string;
  courseId: string;
  batches: any[] = [];
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
    private api: ApiService,
    private scheduleService: ScheduleService,
    private toasterService: NbToastrService,
    private active: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;
    this.courseId = 'all';
    this.batchId = 'all';
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.getCourses(this.instituteId);
    this.onSelectCourse('all');
  }

  getCourses(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      this.display = true;
    });
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
    this.courseId = id;
    this.batches = [];
    this.batchId = 'all';
    if (id === 'all') {
      this.getSchedules({ instituteId: this.instituteId });
    } else {
      this.batches = this.institute.batch.filter((b: any) => b.course === id);
      this.onSelectBatch(this.batchId);
    }
  }

  onSelectBatch(id: string) {
    if (id === 'all') {
      if (this.courseId !== 'all') {
        this.getSchedules({ instituteId: this.instituteId, courseId: this.courseId });
      }
    } else {
      this.getSchedules({ instituteId: this.instituteId, courseId: this.courseId, batchId: id });
    }
  }

  addSchedule() {
    this.router.navigate(['/pages/institute/add-schedule', this.instituteId]);
  }

  getSchedules(data: any) {
    this.scheduleService.getScheduleByInstitute(data).subscribe((res: any) => {
      this.schedules = res;
    });
  }

  viewSchedule(code: any) {
    this.router.navigate(['/pages/institute/view-schedule', this.instituteId], {
      queryParams: { schedule: code },
    });
  }

  getScheduleDate(date: any) {
    const d = date.split('-');
    return `${d[2]}-${d[1]}-${d[0]}`;
  }

  editSchedule(code: any) {
    this.router.navigate(['/pages/institute/edit-schedule', this.instituteId], {
      queryParams: { schedule: code, edit: 'true' },
    });
  }

  deleteSchedule(code: any) {
    const confirm = window.confirm('Are u sure, You want to Delete this Schedule?');
    if (confirm) {
      this.scheduleService.deleteSchedule(code).subscribe(
        (res) => {
          const i = this.schedules.findIndex((s: any) => s._id === code);
          this.schedules.splice(i, 1);
          this.showToast('top-right', 'success', 'Schedule Deleted Successfully!');
        },
        (err) => {
          this.showToast('top-right', 'danger', err.error.message);
        },
      );
    }
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
