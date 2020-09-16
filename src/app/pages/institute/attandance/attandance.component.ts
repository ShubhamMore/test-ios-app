import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AttendanceService } from '../../../services/attendance.service';

@Component({
  selector: 'ngx-attandance',
  templateUrl: './attandance.component.html',
  styleUrls: ['./attandance.component.scss'],
})
export class AttandanceComponent implements OnInit {
  instituteId: string;
  institute: any;
  batchId: string;
  courseId: string;
  batches: any[];
  attendanceSchedule: any = {};
  display: boolean;
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
    private api: ApiService,
    private router: Router,
    private active: ActivatedRoute,
    private toasterService: NbToastrService,
    private attendanceService: AttendanceService,
  ) {}

  ngOnInit() {
    this.display = false;
    this.courseId = 'all';
    this.batches = [];
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.getAttendanceByInstitute();
  }

  viewStudentAttendance(id: any) {
    this.router.navigate(['/pages/institute/view-attandance/' + this.instituteId], {
      queryParams: { student: id },
    });
  }

  isMarkAllowed(date: string) {
    if (date && new Date(date).getTime() < Date.now()) {
      return false;
    } else {
      return true;
    }
  }

  markAttendance(attendance: any) {
    this.attendanceService.setAttendanceData(attendance);
    this.router.navigate(['/pages/institute/add-attandance/' + this.instituteId], {
      queryParams: { courseId: attendance.courseId, batchId: attendance.batchId },
    });
  }
  editAttendance(attendance: any) {
    this.attendanceService.setAttendanceData(attendance);
    this.router.navigate(['/pages/institute/add-attandance/' + this.instituteId], {
      queryParams: { courseId: attendance.courseId, batchId: attendance.batchId, edit: true },
    });
  }

  getAttendanceByInstitute() {
    this.attendanceSchedule.unmarked = [];
    this.attendanceSchedule.marked = [];
    this.api.getAttendanceByInstitute({ instituteId: this.instituteId }).subscribe((res: any) => {
      if (res) {
        this.attendanceSchedule.unmarked = res.unmarkedData;
        this.attendanceSchedule.marked = res.markedData;
      }
    });
  }

  showToaster(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
  getMonth(date: string) {
    const month = date.split('-')[1];
    return this.months[+month - 1];
  }

  getDay(date: string) {
    return date.split('-')[2];
  }
}
