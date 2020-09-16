// tslint:disable-next-line: max-line-length
import { SheduleMentoringComponent } from './student-report-conf/mentoring/shedule-mentoring/shedule-mentoring.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentReportConfComponent } from './student-report-conf/student-report-conf.component';
import { AddPTMsComponent } from './student-report-conf/Schedule-PTMs/add-PTMs/add-ptms.component';
import { ManagePTMsComponent } from './student-report-conf/Schedule-PTMs/manage-PTMs/manage-ptms.component';
import { MentoringComponent } from './student-report-conf/mentoring/mentoring.component';

const routes: Routes = [
  {
    path: '',
    component: StudentReportConfComponent,
    children: [
      {
        path: '',
        redirectTo: 'manage-ptms',
        pathMatch: 'full',
      },
      {
        path: 'add-ptms/:id',
        component: AddPTMsComponent,
      },
      {
        path: 'manage-ptms/:id',
        component: ManagePTMsComponent,
      },
      {
        path: 'mentoring/:id',
        component: MentoringComponent,
      },
      {
        path: 'schedule-mentoring/:id',
        component: SheduleMentoringComponent,
      },
      {
        path: '**',
        // component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentReportRoutingModule {}
