import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.scss'],
})
export class TestReportComponent implements OnInit {
  institute: any;
  instituteId: string;
  batches: any[] = [];
  display: boolean;
  courseId: string;
  batch: string;

  students: any[];
  searchStudentFilter: string;
  hideHeaders: boolean = false;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.display = false;
    this.students = [];
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getCourses(this.instituteId);
    this.getStudents();
  }

  getCourses(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      this.display = true;
    });
  }

  getBatchName(batchId: string) {
    return this.institute.batch.find((b: any) => b._id === batchId).batchCode;
  }
  getCourseName(courseId: string) {
    return this.institute.course.find((b: any) => b._id === courseId).name;
  }

  onSelectCourse(id: string) {
    this.searchStudentFilter = '';
    this.hideHeaders = false;
    this.courseId = id;
    this.batches = this.institute.batch.filter((b: any) => b.course === id);
    this.getStudents();
  }

  onSelectBatch(batchId: string) {
    this.searchStudentFilter = '';
    this.hideHeaders = false;
    this.batch = batchId;
    this.getStudents();
  }

  getStudents() {
    this.api
      .getActiveStudents(this.instituteId, this.courseId, this.batch)
      .subscribe((data: any) => {
        this.students = data;
      });
  }
  viewScore(studentId, batchId, courseId) {
    this.router.navigate([`/pages/institute/test/view-report/${this.instituteId}`], {
      queryParams: { studentId, batchId, courseId },
    });
  }

  getTestsForReports(instituteId: any, batchId: any) {
    this.api.getTestsForReports({ instituteId: instituteId, batchId: batchId }).subscribe(
      (res: any) => {
        this.students = res;
      },
      (err) => {},
    );
  }
  filterActiveStudents() {
    let totalCount = this.students.length;
    this.students = this.students.map((student) => {
      if (
        student.basicDetails.name.toLowerCase().includes(this.searchStudentFilter.toLowerCase())
      ) {
        this.hideHeaders = false;
        student.filterOut = false;
        return student;
      } else {
        totalCount--;
        student.filterOut = true;
        if (totalCount === 0) {
          this.hideHeaders = true;
        }
        return student;
      }
    });
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
}
