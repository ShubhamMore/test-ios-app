import { ManageInstituteAuthGuard } from './../services/auth-services/auth-guards/manage-institute-auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import { SmsRechargeComponent } from './e-commerce/sms-recharge/sms-recharge.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'membership',
        component: MembershipComponent,
        canActivate: [ManageInstituteAuthGuard],
      },
      {
        path: 'dashboard/:id',
        component: ECommerceComponent,
      },
      {
        path: 'sms-recharge/:id',
        component: SmsRechargeComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },

      {
        path: 'institute',
        loadChildren: () =>
          import('./institute/institute/institute.module').then((m) => m.InstituteModule),
      },

      {
        path: 'communication',
        loadChildren: () =>
          import('./communication/communication/communication.module').then(
            (m) => m.CommunicationModule,
          ),
      },
      {
        path: 'student-reports',
        loadChildren: () =>
          import('./student-reports/student-report.module').then((m) => m.StudentReportModule),
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
