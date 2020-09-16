import { StudentService } from './../../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-student-forums-chats',
  templateUrl: './student-forums-chats.component.html',
  styleUrls: ['./student-forums-chats.component.scss'],
})
export class StudentForumsChatsComponent implements OnInit {
  instituteId: string;
  courseId: string = '';
  courses: any[] = [];
  allForums: any[] = [];
  display: boolean;
  constructor(
    private api: ApiService,
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.display = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getCourses(this.instituteId);
  }

  getCourses(instituteId) {
    this.studentService.getStudentCoursesByInstitutes(instituteId).subscribe(
      (res: any[]) => {
        this.courses = res;
        if (this.courses.length > 0) {
          this.courseId = this.courses[0]._id;
          this.onSelectCourse(this.courseId);
        }
        this.display = true;
      },
      (err: any) => {},
    );
  }

  onSelectCourse(courseId: any) {
    if (courseId !== '') {
      this.courseId = courseId;
      this.getForums();
    }
  }

  getForums() {
    this.api
      .getForumsByInstitute({ instituteId: this.instituteId, courseId: this.courseId })
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
    this.router.navigate([`/student/forumsAndChats/comments/${this.instituteId}`], {
      queryParams: { forumId: id, edit: true },
    });
  }
}
