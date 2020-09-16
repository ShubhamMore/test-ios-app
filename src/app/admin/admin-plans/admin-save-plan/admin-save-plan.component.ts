import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-admin-save-plan',
  templateUrl: './admin-save-plan.component.html',
  styleUrls: ['./admin-save-plan.component.scss'],
})
export class AdminSavePlanComponent implements OnInit {
  plan: any;
  form: FormGroup;
  display: boolean;
  edit: any;
  id: any;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private router: Router,
    private toastrService: NbToastrService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;
    this.route.queryParams.subscribe((param: Params) => {
      this.edit = param.edit;
      this.id = param.plan;
    });
    this.form = this.fb.group({
      planType: ['', Validators.required],
      planCode: ['', Validators.required],
      amount: ['', Validators.required],
      upgradeAmount: ['', Validators.required],
    });
    if (this.edit) {
      this.getPLan(this.id);
    } else {
      this.display = true;
    }
  }

  getPLan(id: any) {
    this.adminService.getPlan(id).subscribe((res: any) => {
      this.plan = res;
      this.form.patchValue({
        planType: this.plan.planType,
        planCode: this.plan.planCode,
        amount: this.plan.amount,
        upgradeAmount: this.plan.upgradeAmount,
      });
      this.display = true;
    });
  }

  savePlan() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    const plan: any = this.form.value;
    if (this.edit === 'true') {
      plan._id = this.id;
      this.adminService.updatePlan(plan).subscribe(
        (res: any) => {
          this.showToast('top-right', 'success', 'Plan Updated Successfully');
          setTimeout(() => {
            this.router.navigate(['/admin/plans'], { relativeTo: this.route });
          }, 500);
        },
        (err: any) => {
          this.showToast('top-right', 'danger', err.error.message);
        },
      );
    } else {
      this.adminService.addPlan(plan).subscribe(
        (res: any) => {
          this.showToast('top-right', 'success', 'Plan Added Successfully');
          setTimeout(() => {
            this.router.navigate(['/admin/plans'], { relativeTo: this.route });
          }, 500);
        },
        (err: any) => {
          this.showToast('top-right', 'danger', err.error.message);
        },
      );
    }
  }

  back() {
    this.router.navigate(['/admin/plans'], { relativeTo: this.route });
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
}
