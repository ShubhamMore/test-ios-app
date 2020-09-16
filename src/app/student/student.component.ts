import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './student-menu';

@Component({
  selector: 'ngx-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  menu: any;
  institutes: any[];
  constructor() {}

  ngOnInit() {
    this.menu = MENU_ITEMS;
    this.institutes = [];
  }
}
