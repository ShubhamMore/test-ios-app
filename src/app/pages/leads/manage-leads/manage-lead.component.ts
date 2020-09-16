import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-manage-lead',
  templateUrl: './manage-lead.component.html',
  styleUrls: ['./manage-lead.component.scss'],
})
export class ManageLeadComponent implements OnInit {
  upcomingLeads: any[] = [];
  lostLeads: any[] = [];
  instituteId: string;
  courses: any[] = [];
  selectedCourseId: string;
  selectedStatus: string;
  months: string[] = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
  ) {}
  ngOnInit(): void {
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getLeads();
    this.getCourses();
  }

  getCourses() {
    this.api.getCourseTD(this.instituteId).subscribe(
      (data: any) => {
        this.courses = data.course;
      },
      (err) => console.error(err),
    );
  }

  getCourseName(id: any) {
    const course = this.courses.find((curCourse: any) => curCourse._id === id);

    if (course) {
      return course.name;
    }
    return '';
  }

  onSelectCourse(courseId: any) {
    this.selectedCourseId = courseId;
    this.getLeads();
  }

  getFormattedDate(date: any) {
    const d = date.split('-');
    return `${d[2]}-${d[1]}-${d[0]}`;
  }

  getLeads() {
    this.upcomingLeads = [];
    this.lostLeads = [];
    this.api
      .getLeadsByOfInstitute({
        instituteId: this.instituteId,
        status: this.selectedStatus,
        courseId: this.selectedCourseId,
      })
      .subscribe((data: any[]) => {
        data.forEach((lead: any) => {
          if (lead.status === 'OPEN') {
            this.upcomingLeads.push(lead);
          } else {
            this.lostLeads.push(lead);
          }
        });
      });
  }

  view(id: string) {
    this.router.navigate([`/pages/institute/view-lead/${this.instituteId}`], {
      queryParams: { leadId: id },
    });
  }

  edit(id: string) {
    this.router.navigate([`/pages/institute/add-leads/${this.instituteId}`], {
      queryParams: { leadId: id, edit: true },
    });
  }

  deleteLostLead(id: string, index: number) {
    this.api.deleteLead({ _id: id }).subscribe(
      () => {
        this.lostLeads.splice(index, 1);
        this.showToast('top-right', 'success', 'Lead Deleted Successfully');
      },
      (err) => console.error(err),
    );
  }

  getMonth(date: string) {
    const month = date.split('-')[1];
    return this.months[+month - 1];
  }

  getDay(date: string) {
    return date.split('-')[2];
  }

  deleteUpcomingLead(id: string, index: number) {
    this.api.deleteLead({ _id: id }).subscribe(
      () => {
        this.upcomingLeads.splice(index, 1);
        this.showToast('top-right', 'success', 'Lead Deleted Successfully');
      },
      (err) => console.error(err),
    );
  }

  addLead() {
    this.router.navigate([`/pages/institute/add-leads/${this.instituteId}`]);
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
}
