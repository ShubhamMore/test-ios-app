import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  constructor(private http: HttpClient) {}

  getAllMeetingLinks(instituteId: string) {
    const url = `${environment.server}/institute/meeting/getAllMeetingLinks`;
    return this.http.post(url, { instituteId }).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  deleteMeetingLink(data) {
    const url = `${environment.server}/institute/meeting/deleteMeetingLink`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  updateMeetingLink(data) {
    const url = `${environment.server}/institute/meeting/updateMeetingLink`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  createMeetingLink(data) {
    const url = `${environment.server}/institute/meeting/createMeetingLink`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getOneMeetingLink(data) {
    const url = `${environment.server}/institute/meeting/getOneMeetingLink`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getMeetingLinkByBatch(data: any) {
    const url = `${environment.server}/institute/meeting/getMeetingLinks`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  addRecording(data: any) {
    const url = `${environment.server}/institute/meeting/addRecording`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  deleteRecording(_id: string, recordingId: string, instituteId: string) {
    const url = `${environment.server}/institute/meeting/deleteRecording`;
    return this.http.post(url, { _id, recordingId, instituteId }).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
