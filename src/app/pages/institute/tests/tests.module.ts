// import { InstituteHeaderComponent } from './../../institute-header/institute-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsRoutingModule } from './tests-routing.module';
import { TestsComponent } from './tests.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { ManageTestsComponent } from './manage-tests/manage-tests.component';
import {
  NbCardModule,
  NbLayoutModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbSelectModule,
  NbMenuModule,
  NbAccordionModule,
  NbListModule,
  NbTabsetModule,
  NbIconModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateTestsScoreComponent } from './create-tests-score/create-tests-score.component';
import { TestReportComponent } from './test-report/test-report.component';
import { ViewReportComponent } from './test-report/view-report/view-report.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    TestsComponent,
    CreateTestComponent,
    CreateTestsScoreComponent,
    ManageTestsComponent,
    TestReportComponent,
    ViewReportComponent,
    // InstituteHeaderComponent,
  ],
  imports: [
    CommonModule,
    TestsRoutingModule,
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
    NbListModule,
    ChartsModule,
    NbTabsetModule,
    NbIconModule,
  ],
})
export class TestsModule {}
