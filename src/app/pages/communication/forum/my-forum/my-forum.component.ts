import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Location } from '@angular/common';
import { AuthService } from '../../../../services/auth-services/auth.service';

@Component({
  selector: 'ngx-my-forum',
  templateUrl: './my-forum.component.html',
  styleUrls: ['./my-forum.component.scss'],
})
export class MyForumComponent implements OnInit {
  instituteId: string;
  selectedCourseId: string;
  courses: any;
  myForums: any[] = [];
  display: boolean;
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
    private location: Location,
    private authService: AuthService,
  ) {}
  ngOnInit(): void {
    this.display = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getMyForums();
    this.getCourses();
  }
  getCourses() {
    this.api.getCourseTD(this.instituteId).subscribe(
      (data: any) => {
        this.courses = data.course;
        this.display = true;
      },
      (err) => console.error(err),
    );
  }
  onSelectCourse(courseId) {
    this.selectedCourseId = courseId;
    this.getMyForums();
  }
  getMyForums() {
    this.api
      .getMyForum({ createdBy: this.authService.getUser()._id, courseId: this.selectedCourseId })
      .subscribe((res) => {
        this.myForums = res;
        this.myForums.map((myForum) => {
          const date = new Date(myForum.date);
          myForum.date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
          return myForum;
        });
      });
  }

  edit(id: string) {
    this.router.navigate([`/pages/communication/add-forum/${this.instituteId}`], {
      queryParams: { forumId: id, edit: true },
    });
  }

  delete(id: string, index) {
    this.api.deleteForum({ _id: id }).subscribe(
      () => {
        this.myForums.splice(index, 1);
        this.showToast('top-right', 'success', 'Forum Deleted Successfully');
      },
      (err) => console.error(err),
    );
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
  back() {
    this.location.back();
  }
}
