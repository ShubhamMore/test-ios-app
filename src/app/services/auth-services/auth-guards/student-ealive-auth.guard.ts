import { InstituteService } from './../../institute.service';
import { AuthService } from '../../auth-services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentEaLiveGuard implements CanActivate {
  constructor(private authService: AuthService, private instituteService: InstituteService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    const user = this.authService.getUser();
    if (
      user &&
      user.role === 'student' &&
      this.instituteService.getInstitute().currentPlan !== 'Lite'
    ) {
      return true;
    } else {
      alert('You are not allowed to access this page');
      // return true;
    }
  }

  // tslint:disable-next-line: max-line-length
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    return this.canActivate(route, state);
  }
}
