import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-admin-plans',
  templateUrl: './admin-plans.component.html',
  styleUrls: ['./admin-plans.component.scss'],
})
export class AdminPlansComponent implements OnInit {
  plans: any[];

  display: boolean;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;

    this.plans = [];
    this.adminService.getAllPlans().subscribe((res: any) => {
      this.plans = res;
      this.display = true;
    });
  }

  editPlan(id: any) {
    this.router.navigate(['/admin/plans/edit'], {
      relativeTo: this.route,
      queryParams: { plan: id, edit: true },
    });
  }
}
