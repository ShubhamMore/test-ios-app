import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../../services/auth-services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-student-forum-comment',
  templateUrl: './student-forum-comment.component.html',
  styleUrls: ['./student-forum-comment.component.scss'],
})
export class StudentForumCommentComponent implements OnInit {
  instituteId: string;
  forumId: string;
  allForums: any;
  forumCommentData: any;
  userComment: string;
  constructor(
    private api: ApiService,
    private location: Location,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
    public authService: AuthService,
  ) {}
  ngOnInit(): void {
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe((data) => {
      this.forumId = data.forumId;

      this.getForum();
    });
  }
  getForum() {
    this.api.getSingleForum({ _id: this.forumId }).subscribe(
      (data: any) => {
        this.forumCommentData = data;
      },
      (err) => console.error(err),
    );
  }

  messages: any[] = [];

  submitComment() {
    if (!this.userComment) {
      return;
    }
    const comment = {
      userId: this.authService.getUser()._id,
      userName: this.authService.getUser().name,
      comment: this.userComment,
    };
    this.api.addComment({ _id: this.forumId, comment }).subscribe(
      (data: any) => {
        this.userComment = null;
        this.showToast('top-right', 'success', 'Comment Added Successfully');
        this.getForum();
      },
      (err) => console.error(err),
    );
  }

  getFormattedDateTime(dateTime: string) {
    const date = new Date(dateTime);

    return (
      date.getDate() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getFullYear() +
      ' : ' +
      date.getHours() +
      ':' +
      date.getMinutes()
    );
  }

  back() {
    this.location.back();
  }

  deleteComment(commentId: any) {
    if (window.confirm('Do you want to delete your comment ?')) {
      this.api
        .deleteComment({
          _id: this.forumId,
          commentId,
          userId: this.authService.getUser()._id,
        })
        .subscribe(
          (data: any) => {
            this.showToast('top-right', 'success', 'Comment Deleted Successfully');
            this.getForum();
          },
          (err) => this.showToast('top-right', 'danger', err.error.message),
        );
    }
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
}
