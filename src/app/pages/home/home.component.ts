import { InstituteService } from './../../services/institute.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MENU_ITEMS } from '../pages-menu';
import { HostListener } from '@angular/core';
import { AuthService } from '../../services/auth-services/auth.service';
import { RoleAssignService } from '../../services/role/role-assign.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  display: boolean;

  institutes: any[] = [];
  role: any;
  students: any[] = [];
  studentReq: any[] = [];

  classes: any[] = [];
  fee = ['week', 'month'];

  studentPendingFee: any[] = [];
  user: any;
  messages: any[] = [];
  newLeads: any[] = [];
  showAddInstituteBtn: boolean;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private instituteService: InstituteService,
    private authService: AuthService,
    private roleService: RoleAssignService,
    private menuService: MenuService,
  ) {}

  ngOnInit() {
    this.display = false;
    this.user = this.authService.getUser();
    this.getInstitutes();
    this.instituteService.publishData('');

    MENU_ITEMS[2].hidden = true;
    MENU_ITEMS[3].hidden = true;
    MENU_ITEMS[4].hidden = true;
    MENU_ITEMS[5].hidden = true;
    MENU_ITEMS[6].hidden = true;
    MENU_ITEMS[7].hidden = true;
    MENU_ITEMS[8].hidden = true;
    MENU_ITEMS[9].hidden = true;
    MENU_ITEMS[10].hidden = true;
    MENU_ITEMS[11].hidden = true;
    MENU_ITEMS[12].hidden = true;
    MENU_ITEMS[13].hidden = true;
    MENU_ITEMS[14].hidden = true;
    MENU_ITEMS[15].hidden = true;
    MENU_ITEMS[16].hidden = true;
    MENU_ITEMS[17].hidden = true;
    this.menuService.setMenuSeqList();
  }

  getInstitutes() {
    const user = this.authService.getUser();
    if (user && user.role === 'institute') {
      MENU_ITEMS[1].hidden = false;
      this.showAddInstituteBtn = true;
      this.api.getInstitutes().subscribe((data: any) => {
        this.institutes = data;

        if (this.institutes.length > 0) {
          MENU_ITEMS[1].children[1].hidden = false;
          this.instituteService.setInstitutes(this.institutes);
          this.display = true;
        } else {
          MENU_ITEMS[1].children[1].hidden = true;
        }
        this.menuService.setMenuSeqList();
      });
    } else if (user && user.role === 'employee') {
      this.api.getEmployeeInstitutes({ email: user.email }).subscribe((data: any) => {
        MENU_ITEMS[1].hidden = true;
        this.institutes = data;
        if (this.institutes.length > 0) {
          this.instituteService.setInstitutes(this.institutes);
          this.display = true;
        }
        this.menuService.setMenuSeqList();
      });
    }
  }

  addInstitute() {
    this.router.navigate(['/pages/membership'], { queryParams: { type: 'new' } });
  }

  viewInstitute(id: string, active: any) {
    let role: any;
    if (active) {
      role = this.getEmployeeRole(id);
      this.roleService.assignRoles(role);
      this.instituteService.publishData(id);
      this.router.navigate(['/pages/dashboard', id], { relativeTo: this.route });
    } else {
      this.router.navigate(['/pages/membership'], {
        relativeTo: this.route,
        queryParams: { type: 'renew', id: id },
      });
    }
  }

  getEmployeeRole(instituteId: any) {
    const institute = this.institutes.find((inst: any) => {
      return instituteId === inst._id;
    });
    if (institute) {
      this.instituteService.setInstitute(institute);
      return institute.role;
    }
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    this.institutes = null;
  }
}
