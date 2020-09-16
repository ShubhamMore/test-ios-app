import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private http: HttpClient) {}

  addSchedule(schedule: any) {
    return this.http.post(`${environment.server}/institute/schedule/addSchedule`, schedule).pipe(
      tap((res) => {}),
      catchError(this.handleError),
    );
  }

  updateSchedule(schedule: any, scheduleId: string) {
    schedule._id = scheduleId;
    return this.http.post(`${environment.server}/institute/schedule/updateSchedule`, schedule).pipe(
      tap((res) => {}),
      catchError(this.handleError),
    );
  }

  getScheduleByInstitute(data: any) {
    return this.http
      .post(`${environment.server}/institute/schedule/getScheduleByInstitute`, data)
      .pipe(catchError(this.handleError));
  }

  getScheduleByBatch(instituteId: string, courseId: string, batchId: any) {
    return this.http
      .post(`${environment.server}/institute/schedule/getScheduleByBatch`, {
        instituteId,
        courseId,
        batchId,
      })
      .pipe(catchError(this.handleError));
  }

  getSchedule(scheduleId: string) {
    return this.http
      .post(`${environment.server}/institute/schedule/getSchedule`, {
        scheduleId,
      })
      .pipe(catchError(this.handleError));
  }

  getScheduleDetails(scheduleId: string) {
    return this.http
      .post(`${environment.server}/institute/schedule/getScheduleDetails`, {
        scheduleId,
      })
      .pipe(catchError(this.handleError));
  }

  deleteSchedule(scheduleId: string) {
    return this.http
      .post(`${environment.server}/institute/schedule/deleteSchedule`, {
        scheduleId,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
