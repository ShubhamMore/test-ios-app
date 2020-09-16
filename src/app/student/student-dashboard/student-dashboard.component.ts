import { ApiService } from './../../services/api.service';
import { InstituteService } from './../../services/institute.service';
import { StudentService } from './../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MENU_ITEMS } from '../student-menu';

@Component({
  selector: 'ngx-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent implements OnInit {
  instituteId: string;
  institute: any;
  display: boolean;
  announcements: any[] = [];
  schedules: any[] = [];
  constructor(
    private active: ActivatedRoute,
    private instituteService: InstituteService,
    private api: ApiService,
    private studentService: StudentService,
  ) {
    active.params.subscribe((val) => {
      // put the code from `ngOnInit` here
      this.ngOnInit();
    });
  }
  ngOnInit() {
    this.display = false;
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.institute = this.studentService.getInstitute();
    this.setInstituteIdForMenus();
    this.showDashboardMenus();
    this.getDashboardData(this.instituteId);
    this.studentService.getStudentCoursesByInstitutes(this.instituteId).subscribe((res: any) => {});
    this.api.getInstitute(this.instituteId).subscribe((res: any) => {
      this.institute = res.institute;
      this.instituteService.setInstitute(this.institute);
      this.showDashboardMenus();
      this.setHeaderDetails();
      this.display = true;
    });
  }
  setHeaderDetails() {
    const instituteHeaderDetails = {
      secure_url: this.institute.basicInfo.logo.secure_url,
      name: this.institute.basicInfo.name,
    };
    this.instituteService.setInstituteHeaderDetails(instituteHeaderDetails);
  }

  getDashboardData(id: string) {
    this.studentService.getInstitutesDashboardDataForStudent(id).subscribe((res: any) => {
      this.announcements = res.announcements;
      this.schedules = res.schedule;
      this.display = true;
    });
  }

  setInstituteIdForMenus() {
    MENU_ITEMS.map((menu, i) => {
      if (i !== 0 && i !== 1) {
        const link = menu.link.substring(0, menu.link.lastIndexOf('/'));
        menu.link = link + '/' + this.instituteId;

        if (menu.children) {
          menu.children.map((menuChildren) => {
            const childrenLink = menuChildren.link.substring(0, menuChildren.link.lastIndexOf('/'));
            menuChildren.link = childrenLink + '/' + this.instituteId;
            return menuChildren;
          });
        }
        return menu;
      }
    });
  }

  showDashboardMenus() {
    MENU_ITEMS[2].hidden = false;
    MENU_ITEMS[3].hidden = false;
    MENU_ITEMS[4].hidden = false;
    MENU_ITEMS[5].hidden = false;
    MENU_ITEMS[6].hidden = false;
    MENU_ITEMS[7].hidden = false;
    MENU_ITEMS[8].hidden = false;
    MENU_ITEMS[9].hidden = false;
    MENU_ITEMS[10].hidden = false;
    MENU_ITEMS[11].hidden = false;
    MENU_ITEMS[12].hidden = false;
    if (this.institute.currentPlan === 'Value' || this.institute.currentPlan === 'Power') {
      MENU_ITEMS[13].hidden = false;
      MENU_ITEMS[14].hidden = true;
    } else if (this.institute.currentPlan === 'Lite Plus') {
      MENU_ITEMS[13].hidden = true;
      MENU_ITEMS[14].hidden = false;
    } else {
      MENU_ITEMS[13].hidden = true;
      MENU_ITEMS[14].hidden = true;
    }
  }

  createTime(time: string) {
    return time;
  }

  openUrl(url: any) {
    window.open(url, '_system');
  }

  createDate(date: string) {
    return date.split('-').reverse().join('-');
  }
}
