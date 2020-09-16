import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-mentoring',
  templateUrl: './mentoring.component.html',
  styleUrls: ['./mentoring.component.scss'],
})
export class MentoringComponent implements OnInit {
  instituteId: string;
  institute: any;
  batchId: string;
  courseId: string;
  batches: any[];
  students: any[];
  display: boolean;

  constructor(
    private api: ApiService,
    private router: Router,
    private active: ActivatedRoute,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.display = false;
    this.courseId = 'all';
    this.batches = [];
    this.students = [];
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.getCourses(this.instituteId);
    this.onSelectCourse('all');
  }

  getCourses(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      this.display = true;
    });
  }

  onSelectCourse(id: string) {
    this.courseId = id;
    if (id === 'all') {
      this.getStudents({ instituteId: this.instituteId });
    } else {
      this.batchId = 'all';
      this.batches = this.institute.batch.filter((b: any) => b.course === id);
    }
  }

  onSelectBatch(id: string) {
    if (id === 'all') {
      this.getStudents({ instituteId: this.instituteId, courseId: this.courseId });
    } else {
      this.getStudents({ instituteId: this.instituteId, courseId: this.courseId, batchId: id });
    }
  }

  getStudents(data: any) {
    this.api.getStudentsByInstitute(data).subscribe((res: any) => {
      this.students = res;
    });
  }

  schedule(student: any) {
    this.router.navigate(['/pages/student-reports/schedule-mentoring/', this.instituteId], {
      queryParams: { student },
    });
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
