import { StudentAuthGuard } from './services/auth-services/auth-guards/student-auth.guard';
import { InstituteAuthGuard } from './services/auth-services/auth-guards/institute-auth.guard';
import { LoginAuthGuard } from './services/auth-services/auth-guards/login-auth.guard';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './services/auth-services/auth-guards/auth.guard';

import { SignUpComponent } from './authentication/sign-up/sign-up.component';

import { OtpComponent } from './authentication/otp/otp.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { AdminAuthGuard } from './services/auth-services/auth-guards/admin-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginAuthGuard],
  },

  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [LoginAuthGuard],
  },

  {
    path: 'otp',
    component: OtpComponent,
    canActivate: [LoginAuthGuard],
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [LoginAuthGuard],
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard, AdminAuthGuard],
  },

  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
    canActivate: [AuthGuard, InstituteAuthGuard],
  },

  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then((m) => m.StudentModule),
    canActivate: [AuthGuard, StudentAuthGuard],
  },

  { path: '**', redirectTo: '' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
