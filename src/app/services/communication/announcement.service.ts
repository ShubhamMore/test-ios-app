import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor(private http: HttpClient) {}
  editAnnouncement(announcement: any) {
    return this.http
      .post(`${environment.server}/institute/announcement/editAnnouncement`, announcement)
      .pipe(
        tap((response) => {}),
        catchError((err) => this.handleError(err)),
      );
  }

  postAnnouncement(announcement: any) {
    return this.http
      .post(`${environment.server}/institute/announcement/makeAnnouncement`, announcement)
      .pipe(
        tap((response) => {}),
        catchError((err) => this.handleError(err)),
      );
  }

  getAnnouncements(id: any): Observable<any> {
    return this.http
      .post(`${environment.server}/institute/announcement/getAnnouncement`, { instituteId: id })
      .pipe(
        tap((res) => {}),
        catchError((err) => this.handleError(err)),
      );
  }

  getStudentAnnouncements(id: any, batch: any): Observable<any> {
    return this.http
      .post(`${environment.server}/institute/announcement/getStudentAnnouncements`, {
        instituteId: id,
        batch,
      })
      .pipe(
        tap((res) => {}),
        catchError((err) => this.handleError(err)),
      );
  }

  getSingleAnnouncement(id: any): Observable<any> {
    return this.http
      .post(`${environment.server}/institute/announcement/getSingleAnnouncement`, {
        id,
      })
      .pipe(
        tap((res) => {}),
        catchError((err) => this.handleError(err)),
      );
  }

  deleteAnnouncement(id: any, instituteId: string): Observable<any> {
    return this.http
      .post<any>(`${environment.server}/institute/announcement/deleteAnnouncement`, {
        _id: id,
        instituteId,
      })
      .pipe(
        tap((res) => {}),
        catchError((err) => this.handleError(err)),
      );
  }

  handleError(error: any) {
    return throwError(error);
  }
}
