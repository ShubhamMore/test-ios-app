import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MENU_ITEMS } from '../pages-menu';
import { AuthService } from '../../services/auth-services/auth.service';
import { RoleAssignService } from '../../services/role/role-assign.service';
import { InstituteService } from '../../services/institute.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss'],
  styles: [
    `
      :host nb-tab {
        padding: 0.5rem;
      }
    `,
  ],
})
export class ECommerceComponent implements OnInit {
  myInstitute: any;

  display: boolean;
  instituteId: string;

  institutes: any[] = [];

  studentReq: any[] = [];

  feeOption = ['week', 'month'];

  studentRequest: any[] = [];
  messages: any[] = [];
  newLeads: any[] = [];
  classes: any[] = [];
  pendingFees: any[] = [];
  announcements: any[] = [];
  onlineClasses: any[] = [];

  totalStudents: any = 0;
  totalBatches: any = 0;
  role: any;
  study = [];
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    public instituteService: InstituteService,
    private roleService: RoleAssignService,
    private menuService: MenuService,
    private toastrService: NbToastrService,
  ) {
    route.params.subscribe((val) => {
      // put the code from `ngOnInit` here
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.display = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');

    MENU_ITEMS[2].link = '/pages/dashboard/' + this.instituteId;
    MENU_ITEMS[4].children[0].link =
      '/pages/institute/branch-config/manage-course/' + this.instituteId;
    MENU_ITEMS[4].children[1].link =
      '/pages/institute/branch-config/manage-batch/' + this.instituteId;
    MENU_ITEMS[4].children[2].link =
      '/pages/institute/branch-config/manage-discount/' + this.instituteId;
    MENU_ITEMS[4].children[3].link =
      '/pages/institute/branch-config/manage-receipt/' + this.instituteId;
    MENU_ITEMS[4].children[4].link =
      '/pages/institute/branch-config/manage-employee/' + this.instituteId;
    MENU_ITEMS[5].children[0].link = '/pages/institute/add-students/' + this.instituteId;
    MENU_ITEMS[5].children[1].link = '/pages/institute/manage-students/' + this.instituteId;
    MENU_ITEMS[5].children[2].link = '/pages/institute/pending-students/' + this.instituteId;
    MENU_ITEMS[6].children[0].link = '/pages/communication/announcements/' + this.instituteId;
    MENU_ITEMS[6].children[1].link = '/pages/communication/forum/' + this.instituteId;
    MENU_ITEMS[7].children[0].link = '/pages/institute/test/manage-test/' + this.instituteId;
    MENU_ITEMS[7].children[1].link = '/pages/institute/test/test-report/' + this.instituteId;
    MENU_ITEMS[8].children[3].link = '/pages/student-reports/mentoring/' + this.instituteId;
    MENU_ITEMS[8].children[4].link = '/pages/student-reports/manage-ptms/' + this.instituteId;
    MENU_ITEMS[11].link = '/pages/institute/manage-schedule/' + this.instituteId;
    MENU_ITEMS[12].link = '/pages/institute/attandance/' + this.instituteId;

    MENU_ITEMS[13].children[0].link =
      '/pages/institute/online-classes/settings/' + this.instituteId;

    MENU_ITEMS[13].children[1].link =
      '/pages/institute/online-classes/create-class/' + this.instituteId;
    MENU_ITEMS[13].children[2].link =
      '/pages/institute/online-classes/manage-class/' + this.instituteId;

    MENU_ITEMS[14].children[0].link =
      '/pages/institute/online-classes/create-class-link/' + this.instituteId;
    MENU_ITEMS[14].children[1].link =
      '/pages/institute/online-classes/manage-class-link/' + this.instituteId;
    MENU_ITEMS[14].children[2].link =
      '/pages/institute/online-classes/utilities/' + this.instituteId;

    MENU_ITEMS[15].link = '/pages/institute/online-classes/' + this.instituteId;

    MENU_ITEMS[16].link = '/pages/institute/manage-leads/' + this.instituteId;
    MENU_ITEMS[17].link = '/pages/institute/study-material/' + this.instituteId;
    this.menuService.setMenuSeqList();
    // this.getStudents(this.instituteId);
    this.getInstitute(this.instituteId);
    this.getDashboardInfo(this.instituteId);
  }

  getDashboardInfo(id: string) {
    this.api.getDashboardInfo(id).subscribe(
      (res: any) => {
        this.classes = res.upcomingClass;
        this.pendingFees = res.pendingFees;
        this.newLeads = res.leads;
        this.announcements = res.announcements;
        this.onlineClasses = res.upcomingOnlineClasses;
        // this.studentReq = res.studentRequests;
        this.totalStudents = res.studentCount;
        this.totalBatches = res.batchCount;

        const instituteHeaderDetails = {
          secure_url: this.myInstitute.institute.basicInfo.logo.secure_url,
          name: this.myInstitute.institute.basicInfo.name,
          currentPlan: this.myInstitute.institute.currentPlan,
          totalStudents: this.totalStudents,
          totalBatches: this.totalBatches,
        };

        this.instituteService.setInstituteHeaderDetails(instituteHeaderDetails);
      },
      (error: any) => {
        this.showToast('top-right', 'danger', error.message);
        if (error.message === 'Please Activate Your Institute') {
          this.router.navigate(['/pages/membership'], {
            relativeTo: this.route,
            queryParams: { type: 'renew', id: this.instituteId },
          });
        }
      },
    );
  }

  createTime(time: string) {
    return time;
  }

  createDate(date: string) {
    return date.split('-').reverse().join('-');
  }

  goToAnnouncement(announcement: string) {
    this.router.navigate(['/pages/communication/view-announcements', this.instituteId], {
      relativeTo: this.route,
      queryParams: { announcement },
    });
  }

  getInstitute(id: string) {
    this.api.getInstitute(id).subscribe((res: any) => {
      this.myInstitute = res;
      this.instituteService.setInstitute(this.myInstitute.institute);
      if (this.myInstitute.institute.currentPlan === 'Lite') {
        MENU_ITEMS[13].hidden = true;
        MENU_ITEMS[14].hidden = false;
      } else {
        MENU_ITEMS[13].hidden = false;
        MENU_ITEMS[14].hidden = true;
      }
      this.roleService.assignRoles(this.authService.getUser().role);
      this.role = this.roleService.getRole();

      this.display = true;
    });
  }

  getStudents(id: string) {
    this.api.getStudents(id).subscribe(
      (res: any) => {
        this.studentRequest = res;
      },
      (err) => {
        console.error(err);
      },
    );
  }

  getDate(date: string) {
    return date.split('-').reverse().join('-');
  }

  getInstitutes() {
    const user = this.authService.getUser();
    if (user && user.role === 'institute') {
      MENU_ITEMS[1].hidden = false;
      this.api.getInstitutes().subscribe((data: any) => {
        this.institutes = data;

        if (this.institutes.length) {
          MENU_ITEMS[1].children[1].hidden = false;
          this.instituteService.setInstitutes(this.institutes);
          this.display = true;
        } else {
          MENU_ITEMS[1].children[1].hidden = true;
        }
      });
    } else if (user && user.role === 'employee') {
      this.api.getEmployeeInstitutes({ email: user.email }).subscribe((data: any) => {
        MENU_ITEMS[1].hidden = true;
        this.institutes = data;
        if (this.institutes.length) {
          this.instituteService.setInstitutes(this.institutes);
          this.display = true;
        }
        this.menuService.setMenuSeqList();
      });
    }
  }

  viewStudent(studentEduId: any, courseId: any) {
    this.router.navigate(['/pages/institute/view-student', this.instituteId], {
      relativeTo: this.route,
      queryParams: {
        student: studentEduId,
        course: courseId,
      },
    });
  }

  recharge() {
    this.router.navigate(['/pages/sms-recharge', this.instituteId], { relativeTo: this.route });
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
}
