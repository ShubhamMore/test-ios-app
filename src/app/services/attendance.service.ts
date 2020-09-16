import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  attendanceData: any;

  setAttendanceData(attendanceData) {
    this.attendanceData = attendanceData;
  }

  getAttendanceData() {
    return this.attendanceData;
  }
}
