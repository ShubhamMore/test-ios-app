import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SmsPackService {
  constructor(private http: HttpClient) {}

  addSmsPack(smsPack: any) {
    return this.http
      .post(environment.server + '/sms/addSmsPack/', smsPack)
      .pipe(tap(), catchError(this.handleError));
  }

  updateSmsPack(smsPack: any) {
    return this.http
      .post(environment.server + '/sms/updateSmsPack/', smsPack)
      .pipe(tap(), catchError(this.handleError));
  }

  deleteSmsPack(id: string) {
    return this.http
      .post(environment.server + '/sms/deleteSmsPack/', { id })
      .pipe(tap(), catchError(this.handleError));
  }

  getSmsPacks() {
    return this.http
      .post(environment.server + '/sms/getSmsPacks/', {})
      .pipe(tap(), catchError(this.handleError));
  }

  getSmsPack(id: string) {
    return this.http
      .post(environment.server + '/sms/getSmsPack/', { _id: id })
      .pipe(tap(), catchError(this.handleError));
  }

  rechargeSms(id: string, packId: string) {
    return this.http
      .post(environment.server + '/sms/rechargeSms/', { id, packId })
      .pipe(tap(), catchError(this.handleError));
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
