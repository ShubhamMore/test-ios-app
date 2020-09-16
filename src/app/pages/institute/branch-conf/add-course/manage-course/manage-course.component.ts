import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'ngx-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss'],
})
export class ManageCourseComponent implements OnInit {
  display: boolean = false;
  courses: any[] = [];
  institutes: any[] = [];
  institute: any[] = [];
  instituteId: string;

  constructor(private api: ApiService, private router: Router, private active: ActivatedRoute) {}

  ngOnInit() {
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.getCourses(this.instituteId);
  }

  getCourses(id: any) {
    this.api.getCourses(id).subscribe((data: any) => {
      this.courses = data.course;
    });
  }

  delete(id: any) {
    const confirm = window.confirm('Are u sure, you want to Delete This Course?');
    if (confirm) {
      let param = new HttpParams();
      param = param.append('instituteId', this.instituteId);
      param = param.append('courseId', id);
      this.api.deleteCourse(param).subscribe(
        (res) => {
          const i = this.courses.findIndex((e) => e._id === id);
          if (i !== -1) {
            this.courses.splice(i, 1);
          }
        },
        (error) => console.error(error),
      );
    }
  }

  edit(id: string) {
    this.router.navigate([`/pages/institute/branch-config/add-courses/${this.instituteId}`], {
      queryParams: { courseId: id, edit: true },
    });
  }

  onClick() {
    this.router.navigate(['/pages/institute/branch-config/add-courses/', this.instituteId]);
  }
}
