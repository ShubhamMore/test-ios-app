import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BranchConfComponent } from '../branch-conf.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { AddBatchesComponent } from '../add-batches/add-batches.component';
import { DiscountComponent } from '../discount/discount.component';
import { ReceiptConfComponent } from '../receipt-conf/receipt-conf.component';
import { ManageCourseComponent } from '../../branch-conf/add-course/manage-course/manage-course.component';
import { ViewCourseComponent } from '../../branch-conf/add-course/view-course/view-course.component';

import { ManageBatchComponent } from '../add-batches/manage-batch/manage-batch.component';

import { ManageDiscountComponent } from '../discount/manage-discount/manage-discount.component';

import { ManageReceiptComponent } from '../../branch-conf/receipt-conf/manage-receipt/manage-receipt.component';
import { ManageEmployeeComponent } from '../employee-management/manage-employee/manage-employee.component';
import { AddEmployeeComponent } from '../employee-management/add-employee.component';
import { ViewEmployeeComponent } from '../employee-management/view-employee/view-employee.component';

const routes = [
  {
    path: '',
    component: BranchConfComponent,
    children: [
      { path: 'add-courses/:id', component: AddCourseComponent },
      { path: 'manage-course/:id', component: ManageCourseComponent },
      { path: 'view-course/:id', component: ViewCourseComponent },
      { path: 'add-batch/:id', component: AddBatchesComponent },
      { path: 'manage-batch/:id', component: ManageBatchComponent },
      { path: 'add-discount/:id', component: DiscountComponent },
      { path: 'manage-discount/:id', component: ManageDiscountComponent },
      { path: 'manage-receipt/:id', component: ManageReceiptComponent },
      { path: 'add-receipt/:id', component: ReceiptConfComponent },
      { path: 'add-employee/:id', component: AddEmployeeComponent },
      { path: 'add-employee/:id/edit', component: AddEmployeeComponent },
      { path: 'manage-employee/:id', component: ManageEmployeeComponent },
      { path: 'view-employee/:id', component: ViewEmployeeComponent },
      { path: '', redirectTo: 'add-courses', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchRoutingModule {}
