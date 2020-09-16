import { Injectable } from '@angular/core';
import { MENU_ITEMS } from '../pages/pages-menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuInSeq = [];
  setMenuSeqList() {
    this.menuInSeq = [];
    this.menuInSeq.push(MENU_ITEMS[0]);
    this.menuInSeq.push(MENU_ITEMS[1]);
    this.menuInSeq.push(MENU_ITEMS[2]);
    this.menuInSeq.push(MENU_ITEMS[5]);
    this.menuInSeq.push(MENU_ITEMS[11]);
    this.menuInSeq.push(MENU_ITEMS[12]);
    this.menuInSeq.push(MENU_ITEMS[6]);
    this.menuInSeq.push(MENU_ITEMS[4]);
    this.menuInSeq.push(MENU_ITEMS[16]);
    this.menuInSeq.push(MENU_ITEMS[13]);
    this.menuInSeq.push(MENU_ITEMS[14]);
    this.menuInSeq.push(MENU_ITEMS[15]);
    this.menuInSeq.push(MENU_ITEMS[7]);
    this.menuInSeq.push(MENU_ITEMS[17]);
    this.menuInSeq.push(MENU_ITEMS[8]);
  }
}
