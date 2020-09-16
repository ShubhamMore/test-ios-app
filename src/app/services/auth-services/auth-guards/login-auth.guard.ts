import { AuthService } from '../../auth-services/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    roure: ActivatedRouteSnapshot,
    router: RouterStateSnapshot,
  ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        const isAuth = !!user;
        if (isAuth) {
          if (user.role === 'admin') {
            return this.router.createUrlTree(['/admin']);
          } else if (user.role === 'institute' || user.role === 'employee') {
            return this.router.createUrlTree(['/pages']);
          } else if (user.role === 'student') {
            return this.router.createUrlTree(['/student']);
          } else {
            alert('Invalid Route');
            return;
          }
        }
        return true;
      }),
      // tap(isAuth => {
      //   if (!isAuth) {
      //     this.router.navigate(['/auth']);
      //   }
      // })
    );
  }
}
