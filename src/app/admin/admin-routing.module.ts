import { SaveAdminSmsPackComponent } from './admin-sms-pack/save-admin-sms-pack/save-admin-sms-pack.component';
import { AdminSmsPackComponent } from './admin-sms-pack/admin-sms-pack.component';
import { SaveAdminCouponsComponent } from './admin-coupons/save-admin-coupons/save-admin-coupons.component';
import { AdminCouponsComponent } from './admin-coupons/admin-coupons.component';
import { AdminInstitutesComponent } from './admin-institutes/admin-institutes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPlansComponent } from './admin-plans/admin-plans.component';
import { AdminInstituteComponent } from './admin-institute/admin-institute.component';
import { AdminSavePlanComponent } from './admin-plans/admin-save-plan/admin-save-plan.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: AdminHomeComponent,
      },
      {
        path: 'institutes',
        component: AdminInstitutesComponent,
      },
      {
        path: 'institute',
        component: AdminInstituteComponent,
      },
      {
        path: 'plans',
        component: AdminPlansComponent,
      },
      {
        path: 'plans/add',
        component: AdminSavePlanComponent,
      },
      {
        path: 'plans/edit',
        component: AdminSavePlanComponent,
      },
      {
        path: 'coupons',
        component: AdminCouponsComponent,
      },
      {
        path: 'coupons/add',
        component: SaveAdminCouponsComponent,
      },
      {
        path: 'coupons/edit',
        component: SaveAdminCouponsComponent,
      },
      {
        path: 'smspack',
        component: AdminSmsPackComponent,
      },
      {
        path: 'smspack/add',
        component: SaveAdminSmsPackComponent,
      },
      {
        path: 'smspack/edit',
        component: SaveAdminSmsPackComponent,
      },

      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
