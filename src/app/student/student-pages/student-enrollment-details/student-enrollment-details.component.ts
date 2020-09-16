import { StudentService } from './../../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-student-enrollment-details',
  templateUrl: './student-enrollment-details.component.html',
  styleUrls: ['./student-enrollment-details.component.scss'],
})
export class StudentEnrollmentDetailsComponent implements OnInit {
  courses: any[];
  instituteId: string;
  display: boolean;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;
    this.courses = [];
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getCourses(this.instituteId);
  }

  getCourses(id: string) {
    this.studentService.getStudentAllCoursesByInstitute(id).subscribe((data: any) => {
      this.courses = data;
      this.display = true;
    });
  }

  view(course: string) {
    this.router.navigate([`/student/viewEnrollment/${this.instituteId}`], {
      queryParams: { student: this.studentService.getStudent().eduAtlasId, course: course },
    });
  }
}
