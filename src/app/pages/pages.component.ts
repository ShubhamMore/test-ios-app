import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menuService.menuInSeq"></nb-menu>

      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  constructor(public menuService: MenuService) {}
  menu = MENU_ITEMS;
  menuSeq = [];
  institutes = [];
  menuInSeq = [];

  ngOnInit(): void {
    this.menuService.setMenuSeqList();
  }
}
