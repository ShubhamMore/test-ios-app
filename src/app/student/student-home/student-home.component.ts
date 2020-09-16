import { InstituteService } from './../../services/institute.service';
import { StudentService } from './../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../student-menu';

@Component({
  selector: 'ngx-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss'],
})
export class StudentHomeComponent implements OnInit {
  announcements: any[] = [];
  schedules: any[] = [];
  tests: any[] = [];
  onlineClasses: any[] = [];

  display: boolean = false;
  constructor(private instituteService: InstituteService, private studentService: StudentService) {}
  ngOnInit() {
    this.instituteService.publishData('');

    this.hideOtherMenus();
    this.getDashboardData();
  }

  hideOtherMenus() {
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
  }

  getDashboardData() {
    this.studentService.getStudentDashboard().subscribe((res: any) => {
      this.announcements = res.announcements;
      this.tests = res.test;
      this.schedules = res.schedule;
      this.display = true;
      this.onlineClasses = res.onlineClass;
    });
  }

  openUrl(url: any) {
    window.open(url, '_system');
  }

  createTime(time: string) {
    return time;
  }

  createDate(date: string) {
    return date.split('-').reverse().join('-');
  }
}
