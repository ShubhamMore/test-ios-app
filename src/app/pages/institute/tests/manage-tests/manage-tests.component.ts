import { NbToastrService } from '@nebular/theme';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-manage-tests',
  templateUrl: './manage-tests.component.html',
  styleUrls: ['./manage-tests.component.scss'],
})
export class ManageTestsComponent implements OnInit {
  instituteId: string;

  display: boolean;
  tests: any = {};
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
    this.tests.unmarked = [];
    this.tests.marked = [];
    this.display = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getTests({ instituteId: this.instituteId });
  }

  createTest() {
    this.router.navigate([`/pages/institute/test/create-test/${this.instituteId}`], {
      queryParams: {},
    });
  }

  editTest(id: string) {
    this.router.navigate([`/pages/institute/test/create-test/${this.instituteId}/edit`], {
      queryParams: { test: id, edit: 'true' },
    });
  }

  markTest(id: string) {
    this.router.navigate([`/pages/institute/test/add-test-score/${this.instituteId}`], {
      queryParams: { test: id },
    });
  }
  editMarks(id: string) {
    this.router.navigate([`/pages/institute/test/add-test-score/${this.instituteId}`], {
      queryParams: { test: id, edit: true },
    });
  }

  isMarkAllowed(date: string) {
    if (date && new Date(date).getTime() < Date.now()) {
      return false;
    } else {
      return true;
    }
  }

  deleteTest(id: string, i: number) {
    const confirm = window.confirm('Are u sure, You want to delete this Test?');
    if (confirm) {
      this.api.deleteTest({ _id: id }).subscribe(
        (res: any) => {
          this.tests.unmarked.splice(i, 1);
          this.showToast('top-right', 'success', 'Test Deleted Successfully');
        },
        (err) => {
          this.showToast('top-right', 'danger', err.err.message);
        },
      );
    }
  }

  getTests(data: any) {
    this.api.getTestByInstitute(data).subscribe(
      (res: any) => {
        if (res) {
          this.tests.marked = res.markedTest;
          this.tests.unmarked = res.umarkedTest;
        }
        this.display = true;
      },
      (err) => {},
    );
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }

  getMonth(date: string) {
    const month = date.split('-')[1];
    return this.months[+month - 1];
  }

  getDay(date: string) {
    return date.split('-')[2];
  }
}
