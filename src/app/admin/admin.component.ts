import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './admin-menu';

@Component({
  selector: 'ngx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  menu: any;
  institutes: any[];
  constructor() {}

  ngOnInit() {
    this.menu = MENU_ITEMS;
    this.institutes = [];
  }
}
