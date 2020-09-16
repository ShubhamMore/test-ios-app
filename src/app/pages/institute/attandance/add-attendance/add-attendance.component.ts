import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { AttendanceService } from '../../../../services/attendance.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ngx-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.scss'],
})
export class AddAttendanceComponent implements OnInit {
  attandanceform: FormGroup;
  instituteId: string;
  attendanceId: string;
  date: number;
  courses: any[];
  batches: any[];
  availableBatches: any[];
  attendanceBasicDetail: any;
  students: any[];
  attendance: any[];
  edit: string;
  invalidFile: boolean = false;
  file: File;
  markAllCheckBox: boolean = true;
  sampleExcel: any;
  @ViewChild('fileInput', { static: false }) pickedFile: ElementRef;
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
    private active: ActivatedRoute,
    private toasterService: NbToastrService,
    private attendanceService: AttendanceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.date = Date.now();
    this.courses = [];
    this.batches = [];
    this.students = [];
    this.availableBatches = [];
    this.attendance = [];
    this.sampleExcel = environment.server + '/sample/attendance.xlsx';
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.active.queryParams.subscribe((param: Params) => {
      const courseId = param.courseId;
      const batchId = param.batchId;
      this.edit = param.edit;
      this.attendanceBasicDetail = this.attendanceService.getAttendanceData();
      if (!this.edit) {
        this.getStudentsByBatch(courseId, batchId);
      } else {
        this.getAttendance();
      }
    });
  }
  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];

    const imgExt: string[] = ['xsl', 'xlsx', 'csv'];
    const ext = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
    if (!(imgExt.indexOf(ext) !== -1)) {
      this.invalidFile = true;
      return;
    }
    this.invalidFile = false;
    this.file = file;
  }

  uploadFile() {
    const fetchAttendanceFile = new FormData();
    fetchAttendanceFile.append('scheduleId', this.attendanceBasicDetail._id);
    fetchAttendanceFile.append('lectureId', this.attendanceBasicDetail.days._id);
    fetchAttendanceFile.append('date', this.attendanceBasicDetail.days.date);
    fetchAttendanceFile.append('courseId', this.attendanceBasicDetail.courseId);
    fetchAttendanceFile.append('batchId', this.attendanceBasicDetail.batchId);
    fetchAttendanceFile.append('instituteId', this.instituteId);
    fetchAttendanceFile.append('uploadfile', this.file, this.file.name);

    this.api.attendanceByFile(fetchAttendanceFile).subscribe(
      (res: any) => {
        this.showToaster('top-right', 'success', 'Attendance Marked Successfully');
        this.router.navigate(['/pages/institute/attandance/' + this.instituteId]);
      },
      (err) => {
        this.showToaster('top-right', 'danger', err.error.message);
      },
    );
  }
  getAttendance() {
    const req = {
      date: this.attendanceBasicDetail.days.date,
      instituteId: this.instituteId,
      courseId: this.attendanceBasicDetail.courseId,
      batchId: this.attendanceBasicDetail.batchId,
    };

    this.api.getAttendanceByDate(req).subscribe((res: any) => {
      if (res) {
        this.attendance = res;
      }
    });
  }

  viewAttendance(studentId, studentName) {
    this.router.navigate([`/pages/institute/view-attandance/${this.instituteId}`], {
      queryParams: { studentId, studentName },
    });
  }
  getStudentsByBatch(courseId, batchId) {
    this.api.getStudentsByBatch(this.instituteId, courseId, batchId).subscribe(
      (res: any) => {
        if (res) {
          this.attendance = res.map((student) => {
            return {
              studentId: student._id,
              studentName: student.basicDetails.name,
              studentRollNo: student.instituteDetails.rollNumber,
              attendanceStatus: false,
            };
          });
        }
      },
      (err) => {},
    );
  }

  markAllAttendance() {
    this.attendance.map((attendance) => {
      attendance.attendanceStatus = this.markAllCheckBox;
      return attendance;
    });
    this.markAllCheckBox = !this.markAllCheckBox;
  }
  markSingleAttendance(isPresent, i) {
    this.attendance[i].attendanceStatus = isPresent;
  }
  constructDate(dateInMillisecond: number) {
    const date = new Date(dateInMillisecond);
    return `${date.getFullYear()}-${this.appendZero(date.getMonth() + 1)}-${this.appendZero(
      date.getDate(),
    )}`;
  }
  appendZero(n: number): string {
    if (n < 10) {
      return '0' + n;
    }
    return '' + n;
  }

  markAttendance(event: any, studentId: string, index: number) {
    if (event.target.checked) {
      this.attendance[index].attendanceStatus = true;
    } else {
      this.attendance[index].attendanceStatus = false;
    }
  }

  saveAttendance() {
    const request = {
      scheduleId: this.attendanceBasicDetail._id,
      lectureId: this.attendanceBasicDetail.days._id,
      date: this.attendanceBasicDetail.days.date,
      courseId: this.attendanceBasicDetail.courseId,
      batchId: this.attendanceBasicDetail.batchId,
      instituteId: this.instituteId,
      attendance: this.attendance,
    };
    if (!this.edit) {
      this.api.addAttendance(request).subscribe(
        (res) => {
          this.showToaster('top-right', 'success', 'Attendance Added Successfully!');
          this.router.navigate(['/pages/institute/attandance/' + this.instituteId]);
        },
        (err) => {
          this.showToaster('top-right', 'danger', err.error.message);
        },
      );
    } else {
      this.api.addAttendance(request).subscribe(
        (res) => {
          this.showToaster('top-right', 'success', 'Attendance Updated Successfully!');
          this.router.navigate(['/pages/institute/attandance/' + this.instituteId]);
        },
        (err) => {
          this.showToaster('top-right', 'danger', err.error.message);
        },
      );
    }
  }
  showToaster(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }

  openUrl(url: any) {
    window.open(url, '_system');
  }

  onSubmit() {
    const attendanceRequest = {
      date: this.attandanceform.get('date').value,
      instituteId: this.instituteId,
      courseId: this.attandanceform.get('courseId').value,
      batchId: this.attandanceform.get('batchId').value,
      attendance: this.attendance,
    };
    this.api.addAttendance(attendanceRequest).subscribe(
      (res) => {
        this.attandanceform.reset();
        this.attandanceform.get('date').setValue(this.constructDate(this.date));
        this.students = [];
        this.attendance = [];
        this.showToaster('top-right', 'success', 'Attendance Updated Successfully');
      },
      (err) => this.showToaster('top-right', 'danger', err.error.message),
    );
  }
  getMonth(date: string) {
    const month = date.split('-')[1];
    return this.months[+month - 1];
  }

  getDay(date: string) {
    return date.split('-')[2];
  }
}
