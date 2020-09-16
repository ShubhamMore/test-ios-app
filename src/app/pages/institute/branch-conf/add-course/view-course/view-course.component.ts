import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ngx-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss'],
})
export class ViewCourseComponent implements OnInit {
  courses: any;
  instituteId: number;
  constructor(private api: ApiService, private active: ActivatedRoute) {}

  ngOnInit() {
    this.instituteId = +this.active.snapshot.paramMap.get('id');
    this.api.getCourse(this.instituteId).subscribe(
      (data: any) => {
        this.courses = data;
      },
      (err) => console.error(err),
    );
  }
}
