import { InstituteService } from './../../institute.service';
import { RoleAssignService } from './../../role/role-assign.service';
import { AuthService } from '../../auth-services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EaLiveGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private roleService: RoleAssignService,
    private instituteService: InstituteService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    const user = this.authService.getUser();
    const role = this.roleService.getRole();
    if (
      user &&
      ((user.role === 'employee' && (role === 'Manager' || role === 'Teacher')) ||
        user.role === 'institute') &&
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
