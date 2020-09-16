import { StudentService } from './../../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-student-study-material',
  templateUrl: './student-study-material.component.html',
  styleUrls: ['./student-study-material.component.scss'],
})
export class StudentStudyMaterialComponent implements OnInit {
  display: boolean;
  materials: any[] = [];
  courses: any[] = [];
  instituteId: any;
  institute: any;
  batchCode: any = '';
  constructor(
    private toastrService: NbToastrService,
    private studentService: StudentService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getCourses(this.instituteId);
    this.onSelectCourse('all');
  }

  getCourses(instituteId: any) {
    this.studentService.getStudentCoursesByInstitutes(instituteId).subscribe(
      (res: any[]) => {
        this.courses = res;
        if (this.courses.length > 0) {
          this.batchCode = this.courses[0].batchCode;
          this.onSelectCourse(this.batchCode);
        }
        this.display = true;
      },
      (err: any) => {},
    );
  }

  onSelectCourse(batchCode: string) {
    this.getStudyMaterial({ instituteId: this.instituteId, batch: batchCode });
  }

  openUrl(url: any) {
    window.open(url, '_system');
  }

  getStudyMaterial(data: any) {
    this.studentService.getStudyMaterialForStudent(data).subscribe(
      (res: any) => {
        this.materials = res;
      },
      (err: any) => {},
    );
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
}
