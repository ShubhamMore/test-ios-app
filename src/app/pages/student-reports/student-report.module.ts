// import { InstituteHeaderComponent } from './../institute-header/institute-header.component';
import { NgModule } from '@angular/core';

import {
  NbMenuModule,
  NbLayoutModule,
  NbCardModule,
  NbSelectModule,
  NbButtonModule,
  NbDatepickerModule,
  NbCheckboxModule,
  NbInputModule,
  NbAccordionModule,
  NbIconModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { StudentReportRoutingModule } from './student-report-routing.module';
import { AddPTMsComponent } from './student-report-conf/Schedule-PTMs/add-PTMs/add-ptms.component';
import { ManagePTMsComponent } from './student-report-conf/Schedule-PTMs/manage-PTMs/manage-ptms.component';
import { StudentReportConfComponent } from './student-report-conf/student-report-conf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MentoringComponent } from './student-report-conf/mentoring/mentoring.component';
// tslint:disable-next-line: max-line-length
import { SheduleMentoringComponent } from './student-report-conf/mentoring/shedule-mentoring/shedule-mentoring.component';

@NgModule({
  imports: [
    StudentReportRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NbCardModule,
    NbLayoutModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbSelectModule,
    NbMenuModule,
    NbAccordionModule,
    NbEvaIconsModule,
    NbIconModule,
  ],
  declarations: [
    StudentReportConfComponent,
    AddPTMsComponent,
    ManagePTMsComponent,
    MentoringComponent,
    SheduleMentoringComponent,
    // InstituteHeaderComponent,
  ],
})
export class StudentReportModule {}
