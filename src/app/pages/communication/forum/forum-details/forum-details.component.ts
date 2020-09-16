import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../../services/auth-services/auth.service';

@Component({
  selector: 'ngx-forum',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.scss'],
})
export class ForumDetailsComponent implements OnInit {
  instituteId: string;
  forumId: string;
  allForums: any;
  forumCommentData: any;
  userComment: string;
  constructor(
    private api: ApiService,
    private router: Router,
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
        this.showToast('top-right', 'success', 'Comment Added Succesfully');
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
  back(id: string) {
    this.router.navigate([`/pages/communication/forum/${this.instituteId}`], {
      queryParams: { forumId: id, edit: true },
    });
  }
  deleteComment(commentId) {
    if (window.confirm('Do you want to delete your comment ?')) {
      this.api
        .deleteComment({ _id: this.forumId, commentId, userId: this.authService.getUser()._id })
        .subscribe(
          (data: any) => {
            this.showToast('top-right', 'success', 'Comment Deleted Succesfully');
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
