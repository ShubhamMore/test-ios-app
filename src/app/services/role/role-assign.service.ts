import { InstituteService } from './../institute.service';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MENU_ITEMS } from '../../pages/pages-menu';
import { MenuService } from '../menu.service';

@Injectable({
  providedIn: 'root',
})
export class RoleAssignService {
  role: any;

  getRole() {
    return this.role;
  }

  constructor(
    private http: HttpClient,
    private instituteService: InstituteService,
    private menuService: MenuService,
  ) {}

  addRole(role: any) {
    return this.http.post(`${environment.server}/institute/role`, role).pipe(
      tap((res) => {}),
      catchError(this.handleError),
    );
  }

  getOtp(phone: any, params: any) {
    return this.http.get(`${environment.server}/users/sendOTP/${phone}`, { params: params }).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  verifyOtp(params: any) {
    return this.http.get(environment.server + '/users/verifyOTP', { params: params }).pipe(
      tap((res) => {}),
      catchError((err) => this.handleError(err)),
    );
  }

  private handleError(error: any) {
    return throwError(error);
  }

  getEmployeeRole(instituteId: any) {
    const institiute = this.instituteService.getInstitutes().find((institute) => {
      return instituteId === institute._id;
    });
    if (institiute) {
      return institiute.role;
    }
  }

  assignRoles(role: string) {
    if (role && role === 'institute') {
      this.role = role;
      MENU_ITEMS[1].hidden = true;
      MENU_ITEMS[2].hidden = false;
      MENU_ITEMS[3].hidden = false;
      MENU_ITEMS[4].hidden = false;
      MENU_ITEMS[5].hidden = false;
      MENU_ITEMS[6].hidden = false;
      MENU_ITEMS[6].children[1].hidden = false;
      MENU_ITEMS[7].hidden = false;
      MENU_ITEMS[8].hidden = false;
      MENU_ITEMS[8].children[4].hidden = false;
      // MENU_ITEMS[8].hidden = false;
      // MENU_ITEMS[9].hidden = false;
      // MENU_ITEMS[10].hidden = false;
      MENU_ITEMS[11].hidden = false;
      MENU_ITEMS[12].hidden = false;
      if (
        this.instituteService.getInstitute().currentPlan === 'Value' ||
        this.instituteService.getInstitute().currentPlan === 'Power'
      ) {
        MENU_ITEMS[13].hidden = false;
        MENU_ITEMS[13].children[0].hidden = false;
        MENU_ITEMS[13].children[1].hidden = false;
        MENU_ITEMS[13].children[2].hidden = false;
        MENU_ITEMS[14].hidden = true;
        MENU_ITEMS[15].hidden = true;
      } else if (this.instituteService.getInstitute().currentPlan === 'Lite Plus') {
        MENU_ITEMS[13].hidden = true;
        MENU_ITEMS[14].hidden = false;
        MENU_ITEMS[14].children[0].hidden = false;
        MENU_ITEMS[14].children[1].hidden = false;
        MENU_ITEMS[14].children[2].hidden = false;
        MENU_ITEMS[15].hidden = true;
      } else {
        MENU_ITEMS[13].hidden = true;
        MENU_ITEMS[14].hidden = true;
        MENU_ITEMS[15].hidden = false;
      }
      MENU_ITEMS[16].hidden = false;
      MENU_ITEMS[17].hidden = false;
    } else if (role && role === 'Counselor') {
      this.role = role;
      MENU_ITEMS[1].hidden = true;
      MENU_ITEMS[2].hidden = false;
      MENU_ITEMS[3].hidden = false;
      MENU_ITEMS[4].hidden = true;
      MENU_ITEMS[5].hidden = false;
      MENU_ITEMS[6].hidden = false;
      MENU_ITEMS[6].children[1].hidden = false;
      MENU_ITEMS[7].hidden = true;
      MENU_ITEMS[8].hidden = true;
      MENU_ITEMS[8].children[4].hidden = true;
      MENU_ITEMS[11].hidden = true;
      MENU_ITEMS[12].hidden = true;
      if (
        this.instituteService.getInstitute().currentPlan === 'Value' ||
        this.instituteService.getInstitute().currentPlan === 'Power'
      ) {
        MENU_ITEMS[13].hidden = false;
        MENU_ITEMS[13].children[0].hidden = true;
        MENU_ITEMS[13].children[1].hidden = false;
        MENU_ITEMS[13].children[2].hidden = false;
        MENU_ITEMS[14].hidden = true;
        MENU_ITEMS[15].hidden = true;
      } else if (this.instituteService.getInstitute().currentPlan === 'Lite Plus') {
        MENU_ITEMS[13].hidden = true;
        MENU_ITEMS[14].hidden = false;
        MENU_ITEMS[14].children[0].hidden = false;
        MENU_ITEMS[14].children[1].hidden = false;
        MENU_ITEMS[14].children[2].hidden = false;
        MENU_ITEMS[15].hidden = true;
      } else {
        MENU_ITEMS[13].hidden = true;
        MENU_ITEMS[14].hidden = true;
        MENU_ITEMS[15].hidden = false;
      }
      MENU_ITEMS[16].hidden = false;
      MENU_ITEMS[17].hidden = true;
    } else if (role && role === 'Teacher') {
      this.role = role;
      MENU_ITEMS[1].hidden = true;
      MENU_ITEMS[2].hidden = false;
      MENU_ITEMS[3].hidden = false;
      MENU_ITEMS[4].hidden = true;
      MENU_ITEMS[5].hidden = true;
      MENU_ITEMS[6].hidden = false;
      MENU_ITEMS[6].children[1].hidden = false;
      MENU_ITEMS[7].hidden = false;
      MENU_ITEMS[8].hidden = false;
      MENU_ITEMS[8].children[4].hidden = false;
      MENU_ITEMS[11].hidden = false;
      MENU_ITEMS[12].hidden = false;
      if (
        this.instituteService.getInstitute().currentPlan === 'Value' ||
        this.instituteService.getInstitute().currentPlan === 'Power'
      ) {
        MENU_ITEMS[13].hidden = false;
        MENU_ITEMS[13].children[0].hidden = true;
        MENU_ITEMS[13].children[1].hidden = false;
        MENU_ITEMS[13].children[2].hidden = false;
        MENU_ITEMS[14].hidden = true;
        MENU_ITEMS[15].hidden = true;
      } else if (this.instituteService.getInstitute().currentPlan === 'Lite Plus') {
        MENU_ITEMS[13].hidden = true;
        MENU_ITEMS[14].hidden = false;
        MENU_ITEMS[14].children[0].hidden = false;
        MENU_ITEMS[14].children[1].hidden = false;
        MENU_ITEMS[14].children[2].hidden = false;
        MENU_ITEMS[15].hidden = true;
      } else {
        MENU_ITEMS[13].hidden = true;
        MENU_ITEMS[14].hidden = true;
        MENU_ITEMS[15].hidden = false;
      }
      MENU_ITEMS[16].hidden = true;
      MENU_ITEMS[17].hidden = false;
    } else if (role && role === 'Manager') {
      this.role = role;
      MENU_ITEMS[1].hidden = true;
      MENU_ITEMS[2].hidden = false;
      MENU_ITEMS[3].hidden = false;
      MENU_ITEMS[4].hidden = false;
      MENU_ITEMS[5].hidden = false;
      MENU_ITEMS[6].hidden = false;
      MENU_ITEMS[6].children[1].hidden = false;
      MENU_ITEMS[7].hidden = false;
      MENU_ITEMS[8].hidden = false;
      MENU_ITEMS[8].children[4].hidden = false;
      MENU_ITEMS[11].hidden = false;
      MENU_ITEMS[12].hidden = false;
      if (
        this.instituteService.getInstitute().currentPlan === 'Value' ||
        this.instituteService.getInstitute().currentPlan === 'Power'
      ) {
        MENU_ITEMS[13].hidden = false;
        MENU_ITEMS[13].children[0].hidden = true;
        MENU_ITEMS[13].children[1].hidden = false;
        MENU_ITEMS[13].children[2].hidden = false;
        MENU_ITEMS[14].hidden = true;
        MENU_ITEMS[15].hidden = true;
      } else if (this.instituteService.getInstitute().currentPlan === 'Lite Plus') {
        MENU_ITEMS[13].hidden = true;
        MENU_ITEMS[14].hidden = false;
        MENU_ITEMS[14].children[0].hidden = false;
        MENU_ITEMS[14].children[1].hidden = false;
        MENU_ITEMS[14].children[2].hidden = false;
        MENU_ITEMS[15].hidden = true;
      } else {
        MENU_ITEMS[13].hidden = true;
        MENU_ITEMS[14].hidden = true;
        MENU_ITEMS[15].hidden = false;
      }
      MENU_ITEMS[16].hidden = false;
      MENU_ITEMS[17].hidden = false;
    }
    this.menuService.setMenuSeqList();
  }
}
