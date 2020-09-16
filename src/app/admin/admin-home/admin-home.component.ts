import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  institutes: any[];

  display: boolean;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;
    this.adminService.getInstitutes().subscribe((res: any) => {
      this.institutes = res;
      this.display = true;
    });
  }

  viewInstitutes(parentInstitute: string, name: string) {
    this.router.navigate(['/admin/institutes'], {
      relativeTo: this.route,
      queryParams: { parentInstitute, name },
    });
  }
}
