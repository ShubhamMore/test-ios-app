import { Component } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <ion-menu class="menu_main" side="start" menuId="first" content-id="content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content overflow-scroll="true">
        <div>
          <nb-sidebar class="menu-sidebar" tag="menu-sidebar">
            <ng-content select="nb-menu"></ng-content>
          </nb-sidebar>
        </div>
      </ion-content>
    </ion-menu>
    <ion-menu-controller></ion-menu-controller>

    <ion-content id="content">
      <nb-layout windowMode>
        <nb-layout-header fixed style="background-color:#ffd500;">
          <ngx-header></ngx-header>
        </nb-layout-header>
        <nb-layout-column>
          <ng-content select="router-outlet"></ng-content>
        </nb-layout-column>
        <nb-layout-footer fixed>
          <ngx-footer></ngx-footer>
        </nb-layout-footer>
      </nb-layout>
    </ion-content>
  `,
})
export class OneColumnLayoutComponent {}
