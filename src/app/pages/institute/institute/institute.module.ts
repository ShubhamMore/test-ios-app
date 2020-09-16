import { InstituteHeaderComponent } from './../../institute-header/institute-header.component';
import { StudyMaterialComponent } from './../study-material/study-material.component';
import { ViewLeadComponent } from './../../leads/view-lead/view-lead.component';
import { AddAttendanceComponent } from './../attandance/add-attendance/add-attendance.component';
import { ViewAttendanceComponent } from './../attandance/view-attendance/view-attendance.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstRoutingModule } from './institute-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbLayoutModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbListModule,
  NbDatepickerModule,
  NbAccordionModule,
  NbToastrModule,
  NbCheckboxModule,
  NbStepperModule,
  NbTabsetModule,
  NbIconModule,
} from '@nebular/theme';
import { AddInstituteComponent } from '../add-institute/add-institute.component';
import { InstituteComponent } from '../institute.component';
import { AddStudentsComponent } from '../add-students/add-students.component';

import { ManageStudentsComponent } from '../add-students/manage-students/manage-students.component';
import { ManageInstituteComponent } from '../add-institute/manage-institute/manage-institute.component';
import { ViewInstituteComponent } from '../add-institute/manage-institute/view-institute/view-institute.component';

import { ViewStudentComponent } from '../add-students/manage-students/view-student/view-student.component';
import { AddScheduleComponent } from '../../schedule/add-schedule/add-schedule.component';

import { PendingStudentComponent } from '../add-students/pending-student/pending-student.component';
import { AttandanceComponent } from '../attandance/attandance.component';
import { ManageScheduleComponent } from '../../schedule/manage-schedule/manage-schedule.component';
import { ViewScheduleComponent } from '../../schedule/view-schedule/view-schedule.component';

import { AddLeadComponent } from '../../leads/add-leads/add-lead.component';
import { ManageLeadComponent } from '../../leads/manage-leads/manage-lead.component';
import { CheckoutModule } from '../../checkout/checkout.module';

@NgModule({
  declarations: [
    AddInstituteComponent,
    InstituteComponent,
    AddStudentsComponent,

    ManageStudentsComponent,
    ManageInstituteComponent,
    ViewInstituteComponent,

    ViewStudentComponent,
    PendingStudentComponent,
    AddScheduleComponent,
    AttandanceComponent,
    AddAttendanceComponent,
    ViewAttendanceComponent,
    ManageScheduleComponent,
    ViewScheduleComponent,
    AddLeadComponent,
    ManageLeadComponent,
    ViewLeadComponent,

    InstituteHeaderComponent,
    StudyMaterialComponent,
  ],
  imports: [
    CommonModule,
    InstRoutingModule,
    ReactiveFormsModule,
    NbCardModule,
    NbListModule,
    NbTabsetModule,
    NbLayoutModule,
    NbCheckboxModule,
    NbInputModule,
    NbSelectModule,
    NbDatepickerModule,
    NbButtonModule,
    NbAccordionModule,
    NbStepperModule,
    NbIconModule,
    NbToastrModule.forRoot(),
    FormsModule,

    CheckoutModule,
  ],
})
export class InstituteModule {}
