import { NbToastrService } from '@nebular/theme';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss'],
})
export class CreateTestComponent implements OnInit {
  createTestForm: FormGroup;
  instituteId: string;
  institute: any;

  batches: any[] = [];
  display: boolean;

  testId: any;
  test: any;
  edit: string;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private location: Location,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit() {
    this.display = false;

    this.instituteId = this.route.snapshot.paramMap.get('id');

    this.route.queryParams.subscribe((param) => {
      this.testId = param.test;
      this.edit = param.edit;
    });
    this.getCourses(this.instituteId);

    this.createTestForm = this.fb.group({
      batchId: ['', Validators.required],
      courseId: ['', Validators.required],
      instituteId: [this.instituteId],
      date: ['', Validators.required],
      testName: ['', Validators.required],
      testCode: ['', Validators.required],
      totalMarks: ['', Validators.required],
      startTime: ['', Validators.required],
      toTime: ['', Validators.required],
    });
  }

  getTest(id: string) {
    this.api.getSingleTest({ _id: id }).subscribe(
      (data: any) => {
        if (data) {
          this.test = data[0];
          this.createTestForm.patchValue({
            instituteId: this.test.instituteId,
            courseId: this.test.courseId,
            date: this.test.date,
            testName: this.test.testName,
            testCode: this.test.testCode,
            totalMarks: this.test.totalMarks,
            startTime: this.test.startTime,
            toTime: this.test.toTime,
          });
        }

        this.onSelectCourse(this.test.courseId);

        this.createTestForm.patchValue({
          batchId: this.test.batchId,
        });
        this.display = true;
      },
      (err: any) => {},
    );
  }

  getCourses(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      if (this.edit) {
        this.getTest(this.testId);
      } else {
        this.display = true;
      }
    });
  }

  onSelectCourse(id: string) {
    this.batches = this.institute.batch.filter((b: any) => b.course === id);
  }

  createTest() {
    this.createTestForm.markAllAsTouched();
    if (this.createTestForm.valid) {
      if (!this.edit) {
        this.api.addTest(this.createTestForm.value).subscribe(
          (res) => {
            this.showToast('top-right', 'success', 'Test Added Successfully');
            this.location.back();
          },
          (err: any) => {
            this.showToast('top-right', 'danger', err.err.message);
          },
        );
      } else {
        const test = this.createTestForm.value;
        test._id = this.test._id;
        this.api.updateTest(test).subscribe(
          (res) => {
            this.showToast('top-right', 'success', 'Test Updated Successfully');
            this.location.back();
          },
          (err: any) => {
            this.showToast('top-right', 'danger', err.err.message);
          },
        );
      }
    }
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
}
