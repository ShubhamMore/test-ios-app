import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
})
export class ForumComponent implements OnInit {
  instituteId: string;
  selectedCourseId: string;
  courses: any;
  allForums: any[] = [];
  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getForums();
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
  onSelectCourse(courseId) {
    this.selectedCourseId = courseId;
    this.getForums();
  }
  getForums() {
    this.api
      .getForumsByInstitute({ instituteId: this.instituteId, courseId: this.selectedCourseId })
      .subscribe((res: any) => {
        this.allForums = res;
        this.allForums.map((myForum) => {
          const date = new Date(myForum.date);
          myForum.date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
          return myForum;
        });
      });
  }

  comment(id: string) {
    this.router.navigate([`/pages/communication/forum-detail/${this.instituteId}`], {
      queryParams: { forumId: id, edit: true },
    });
  }

  addForum() {
    this.router.navigate([`/pages/communication/add-forum/${this.instituteId}`]);
  }
  myForum() {
    this.router.navigate([`/pages/communication/my-forum/${this.instituteId}`]);
  }
}
