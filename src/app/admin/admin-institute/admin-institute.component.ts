import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-admin-institute',
  templateUrl: './admin-institute.component.html',
  styleUrls: ['./admin-institute.component.scss'],
})
export class AdminInstituteComponent implements OnInit, OnDestroy {
  institute: any;
  display: boolean;
  constructor(private adminService: AdminService, private location: Location) {}

  ngOnInit() {
    this.display = false;
    this.institute = this.adminService.getInstitute();
    if (!this.institute) {
      return this.location.back();
    }
    this.display = true;
  }

  getDate(date: string) {
    return date ? date.substring(0, 10).trim().split('-').reverse().join('-') : '';
  }

  ngOnDestroy() {
    this.adminService.setInstitute(null);
  }
}
