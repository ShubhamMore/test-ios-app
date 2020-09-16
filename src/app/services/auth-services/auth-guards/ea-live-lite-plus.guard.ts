import { InstituteService } from './../../institute.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EaLiveLitePlusGuard implements CanActivate {
  constructor(private instituteService: InstituteService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    if (this.instituteService.getInstitute().currentPlan === 'Lite Plus') {
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
