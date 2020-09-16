import { BranchAuthGuard } from './../../../services/auth-services/auth-guards/branch-auth.guard';
import { StudyMaterialComponent } from './../study-material/study-material.component';
import { ViewAttendanceComponent } from './../attandance/view-attendance/view-attendance.component';
import { AddAttendanceComponent } from './../attandance/add-attendance/add-attendance.component';
import { ViewLeadComponent } from './../../leads/view-lead/view-lead.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InstituteComponent } from '../institute.component';
import { AddInstituteComponent } from '../add-institute/add-institute.component';
import { AddStudentsComponent } from '../add-students/add-students.component';
import { ManageInstituteComponent } from '../add-institute/manage-institute/manage-institute.component';
import { ManageStudentsComponent } from '../add-students/manage-students/manage-students.component';
import { ViewInstituteComponent } from '../add-institute/manage-institute/view-institute/view-institute.component';

import { ViewStudentComponent } from '../add-students/manage-students/view-student/view-student.component';
import { AddScheduleComponent } from '../../schedule/add-schedule/add-schedule.component';
import { AttandanceComponent } from '../attandance/attandance.component';
import { PendingStudentComponent } from '../add-students/pending-student/pending-student.component';
import { ManageScheduleComponent } from '../../schedule/manage-schedule/manage-schedule.component';
import { ViewScheduleComponent } from '../../schedule/view-schedule/view-schedule.component';

import { ManageLeadComponent } from '../../leads/manage-leads/manage-lead.component';
import { AddLeadComponent } from '../../leads/add-leads/add-lead.component';
import { ManageInstituteAuthGuard } from '../../../services/auth-services/auth-guards/manage-institute-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: InstituteComponent,
    children: [
      {
        path: 'add-institute',
        component: AddInstituteComponent,
        canActivate: [ManageInstituteAuthGuard],
      },
      {
        path: 'manage-institute',
        component: ManageInstituteComponent,
        canActivate: [ManageInstituteAuthGuard],
      },
      {
        path: 'view-institute/:id',
        component: ViewInstituteComponent,
        canActivate: [ManageInstituteAuthGuard],
      },

      { path: 'add-students/:id', component: AddStudentsComponent },
      {
        path: 'manage-students/:id',
        component: ManageStudentsComponent,
      },
      { path: 'add-students/:id/edit', component: AddStudentsComponent },
      { path: 'view-student/:id', component: ViewStudentComponent },
      { path: 'pending-students/:id', component: PendingStudentComponent },

      { path: 'attandance/:id', component: AttandanceComponent, canActivate: [] },
      { path: 'add-attandance/:id', component: AddAttendanceComponent, canActivate: [] },
      { path: 'view-attandance/:id', component: ViewAttendanceComponent, canActivate: [] },

      { path: 'study-material/:id', component: StudyMaterialComponent },

      { path: 'add-schedule/:id', component: AddScheduleComponent },
      { path: 'manage-schedule/:id', component: ManageScheduleComponent },
      { path: 'view-schedule/:id', component: ViewScheduleComponent },
      { path: 'edit-schedule/:id', component: AddScheduleComponent },

      { path: 'manage-leads/:id', component: ManageLeadComponent },
      { path: 'view-lead/:id', component: ViewLeadComponent },
      { path: 'add-leads/:id', component: AddLeadComponent },

      {
        path: 'branch-config',
        loadChildren: () =>
          import('../branch-conf/branch/branch.module').then((m) => m.BranchModule),
        canActivate: [BranchAuthGuard],
      },
      {
        path: 'online-classes',
        loadChildren: () =>
          import('../online-classes/online-classes.module').then((m) => m.OnlineClassesModule),
        canActivate: [],
      },
      {
        path: 'test',
        loadChildren: () => import('../tests/tests.module').then((m) => m.TestsModule),
        canActivate: [],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstRoutingModule {}
