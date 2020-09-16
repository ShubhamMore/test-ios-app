import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ngx-admin-institutes',
  templateUrl: './admin-institutes.component.html',
  styleUrls: ['./admin-institutes.component.scss'],
})
export class AdminInstitutesComponent implements OnInit {
  activeInst: any[];
  inactiveInst: any[];
  name: string;

  display: boolean;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;

    let parentInstitute: string;

    this.route.queryParams.subscribe((params: Params) => {
      parentInstitute = params.parentInstitute;
      this.name = params.name;
    });

    this.adminService.getAllInstitutes(parentInstitute).subscribe((res: any) => {
      this.activeInst = res.activeInstitutes;
      this.inactiveInst = res.inactiveInstitutes;
      this.display = true;
    });
  }

  getDate(date: string) {
    return date.split('T')[0].split('-').reverse().join('-');
  }

  viewInstitute(active: boolean, i: any) {
    if (active) {
      this.adminService.setInstitute(this.activeInst[i]);
    } else {
      this.adminService.setInstitute(this.inactiveInst[i]);
    }
    this.router.navigate(['/admin/institute'], { relativeTo: this.route });
  }
}
