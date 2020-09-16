import { ApiService } from './../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-view-lead',
  templateUrl: './view-lead.component.html',
  styleUrls: ['./view-lead.component.scss'],
})
export class ViewLeadComponent implements OnInit {
  lead: any;
  instituteId: string;
  leadId: string;
  display: boolean;

  constructor(
    private api: ApiService,
    private active: ActivatedRoute,
    private router: Router,
    private toasterService: NbToastrService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.display = false;
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.active.queryParams.subscribe((data) => {
      this.leadId = data.leadId;
      if (this.leadId) {
        this.getLead(this.leadId);
      } else {
        this.location.back();
      }
    });
  }

  getLead(id: any) {
    this.api.getSingleLeadToView({ _id: id }).subscribe(
      (data: any) => {
        this.lead = data;
        this.display = true;
      },
      (error: any) => {
        this.showToast('top-right', 'danger', 'Lead Not Found');

        this.location.back();
      },
    );
  }

  edit(id: string) {
    this.router.navigate([`/pages/institute/add-leads/${this.instituteId}`], {
      queryParams: { leadId: id, edit: true },
    });
  }

  delete(id: string) {
    this.api.deleteLead({ _id: id }).subscribe(
      () => {
        this.showToast('top-right', 'success', 'Lead Deleted Successfully');
        this.location.back();
      },
      (err) => console.error(err),
    );
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
}
