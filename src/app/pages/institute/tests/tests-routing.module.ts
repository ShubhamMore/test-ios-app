import { TestsComponent } from './tests.component';
import { ManageTestsComponent } from './manage-tests/manage-tests.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTestComponent } from './create-test/create-test.component';
import { CreateTestsScoreComponent } from './create-tests-score/create-tests-score.component';
import { TestReportComponent } from './test-report/test-report.component';
import { ViewReportComponent } from './test-report/view-report/view-report.component';

const routes: Routes = [
  {
    path: '',
    component: TestsComponent,
    children: [
      { path: 'create-test/:id', component: CreateTestComponent },
      { path: 'create-test/:id/edit', component: CreateTestComponent },
      { path: 'manage-test/:id', component: ManageTestsComponent },
      { path: 'add-test-score/:id', component: CreateTestsScoreComponent },
      { path: 'add-test-score/:id/edit', component: CreateTestsScoreComponent },
      { path: 'test-report/:id', component: TestReportComponent },
      { path: 'view-report/:id', component: ViewReportComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsRoutingModule {}
