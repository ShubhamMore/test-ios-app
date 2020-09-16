import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Location } from '@angular/common';
import { AuthService } from '../../../../services/auth-services/auth.service';

@Component({
  selector: 'ngx-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.scss'],
})
export class AddForumComponent implements OnInit {
  forumForm: FormGroup;
  instituteId: string;
  forumId: string;
  edit: string;
  courses: any;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private active: ActivatedRoute,
    private router: Router,
    private toasterService: NbToastrService,
    private location: Location,
    private authService: AuthService,
  ) {}
  ngOnInit(): void {
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.active.queryParams.subscribe((data) => {
      this.forumId = data.forumId;
      this.edit = data.edit;
      if (this.edit === 'true') {
        this.getForum();
      }
    });

    this.forumForm = this.fb.group({
      topic: ['', Validators.required],
      description: ['', Validators.required],
      courseId: [''],
    });
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
  getForum() {
    this.api.getSingleForum({ _id: this.forumId }).subscribe(
      (data: any) => {
        this.forumForm.patchValue({
          topic: data.title,
          description: data.description,
          courseId: data.courseId,
        });
      },
      (err) => console.error(err),
    );
  }
  get f() {
    return this.forumForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.forumForm.markAllAsTouched();
    if (this.forumForm.invalid) {
      return;
    }

    const forumReq = {
      instituteId: this.instituteId,
      courseId: this.forumForm.get('courseId').value,
      createdBy: this.authService.getUser()._id,
      createdByName: this.authService.getUser().name,
      title: this.forumForm.get('topic').value,
      description: this.forumForm.get('description').value,
      _id: this.forumId,
    };
    if (this.edit === 'true') {
      this.api.updateForum(forumReq).subscribe(
        (data) => {
          this.showToast('top-right', 'success', 'Forum Updated Successfully');
          this.router.navigate(['/pages/communication/forum/', this.instituteId]);
        },
        (err) => {
          this.showToast('top-right', 'danger', err.error.message);
        },
      );
    }

    if (!this.edit) {
      this.api.addForum(forumReq).subscribe(
        () => {
          this.showToast('top-right', 'success', 'Forum Added Successfully');
          this.router.navigate(['/pages/communication/forum/', this.instituteId]);
        },
        (err) => {
          this.showToast('top-right', 'danger', err.error.message);
        },
      );
    }
  }

  back() {
    let confirm = true;
    if (this.forumForm.touched) {
      confirm = window.confirm('If you go back the data will be lost.');
    }
    if (confirm) {
      this.location.back();
    }
  }
  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
}
