import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';

import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        if (req.url.includes('Contries.json')) {
          return next.handle(req);
        }
        const token = 'Bearer ' + JSON.parse(localStorage.getItem('userData'))._token;

        const modifiedReq = req.clone({
          headers: new HttpHeaders().set('Authorization', token),
        });
        return next.handle(modifiedReq);
      }),
    );
  }
}
