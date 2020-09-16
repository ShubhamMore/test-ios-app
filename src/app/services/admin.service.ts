import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private institute: any;

  setInstitute(institute: any) {
    this.institute = institute;
  }

  getInstitute() {
    return this.institute;
  }

  constructor(private http: HttpClient) {}

  getInstitutes() {
    const url = `${environment.server}/admin/getInstitutes`;
    return this.http.post(url, {}).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getAllInstitutes(parentUser: string) {
    const url = `${environment.server}/admin/getAllInstitutes`;
    return this.http.post(url, { parentUser }).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getAllPlans() {
    const url = `${environment.server}/admin/getAllPlans`;
    return this.http.post(url, {}).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getPlan(id: any) {
    const url = `${environment.server}/admin/getPlan`;
    return this.http.post(url, { _id: id }).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  addPlan(plan: any) {
    const url = `${environment.server}/admin/addPlan`;
    return this.http.post(url, plan).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  updatePlan(plan: any) {
    const url = `${environment.server}/admin/updatePlan`;
    return this.http.post(url, plan).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
