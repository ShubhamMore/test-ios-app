import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiService } from '../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  course: FormGroup;
  submitted = false;
  institutes: any[] = [];
  display: boolean = false;
  instituteId: string;
  edit: string;
  courseId: string;
  exclusiveGst: number = null;
  fees: number = 0;
  gstCheckBox: boolean;
  updateCourse: any;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private location: Location,
    private toasterService: NbToastrService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe((param) => {
      this.courseId = param.courseId;
      this.edit = param.edit;
    });
    this.course = this.fb.group({
      name: ['', Validators.required],
      courseCode: ['', Validators.required],
      fees: ['', Validators.required],
      duration: ['', Validators.required],
      gst: [''],
      gstValue: [''],
      discription: [''],
      totalFee: [''],
    });

    if (this.edit === 'true') {
      this.getCourse(this.courseId);
    } else {
      this.inclusiveGst(false);
    }
  }

  getCourse(id) {
    let param = new HttpParams();
    param = param.append('instituteId', this.instituteId);
    param = param.append('courseId', id);
    this.api.getCourse(param).subscribe(
      (res) => {
        this.updateCourse = res[0];
        this.course.patchValue({
          name: this.updateCourse.name,
          courseCode: this.updateCourse.courseCode,
          fees: this.updateCourse.fees,
          duration: this.updateCourse.duration,
          gst: this.updateCourse.gst,
          gstValue: this.updateCourse.gstValue,
          discription: this.updateCourse.discription,
          totalFee: this.updateCourse.totalFee,
        });
        this.exclusiveGst = Number(this.updateCourse.gstValue);
        this.fees = Number(this.updateCourse.fees);
        if (this.updateCourse.gst === 'Inclusive') {
          this.gstCheckBox = true;
          this.inclusiveGst(true);
          this.course.get('gstValue').disable();
        } else {
          this.gstCheckBox = false;
          this.inclusiveGst(false);
        }
      },
      (error) => console.error(error),
    );
  }
  getInstitutes() {
    this.api.getInstitutes().subscribe((data: any) => {
      this.institutes = data;
    });
    this.display = true;
  }

  get f() {
    return this.course.controls;
  }

  back() {
    let confirm = true;
    if (this.course.touched) {
      confirm = window.confirm('If you go back the data will be lost.');
    }
    if (confirm) {
      this.location.back();
    }
  }

  onSubmit() {
    this.submitted = true;
    this.course.markAllAsTouched();
    if (this.course.invalid) {
      return;
    }
    if (this.edit === 'true') {
      let param = new HttpParams();
      param = param.append('instituteId', this.instituteId);
      param = param.append('courseId', this.courseId);

      const course = {
        _id: this.courseId,
        name: this.course.value.name,
        courseCode: this.course.value.courseCode.trim(),
        fees: this.course.value.fees,
        duration: this.course.value.duration,
        gst: this.course.value.gst,
        gstValue: this.course.value.gstValue,
        discription: this.course.value.discription,
        totalFee: this.course.value.totalFee,
      };
      this.api.updateCourse(param, course).subscribe(
        (res) => {
          this.showToast('top-right', 'success', 'Course Updated');
          setTimeout(() => {
            this.router.navigate([
              '/pages/institute/branch-config/manage-course/',
              this.instituteId,
            ]);
          }, 1000);
        },
        (error) => {
          this.showToast('top-right', 'danger', 'Course Updation Failed');
        },
      );
    }

    if (!this.edit) {
      const course = {
        name: this.course.value.name,
        courseCode: this.course.value.courseCode.trim(),
        fees: this.course.value.fees,
        duration: this.course.value.duration,
        gst: this.course.value.gst,
        gstValue: this.course.value.gstValue,
        discription: this.course.value.discription,
        totalFee: this.course.value.totalFee,
      };
      this.api.addCourse(this.instituteId, course).subscribe(
        (data) => {
          this.showToast('top-right', 'success', 'Course Added Successfully');
          setTimeout(() => {
            this.router.navigate([
              '/pages/institute/branch-config/manage-course/',
              this.instituteId,
            ]);
          }, 1000);
        },
        (err) => {
          console.error(err);
          this.showToast(
            'top-right',
            'danger',
            err.error.message ? err.error.message : 'This course id already added',
          );
        },
      );
    }
  }

  inclusiveGst(event: any) {
    const inclusive = event;
    if (inclusive) {
      this.course.get('gstValue').disable();
      this.course.patchValue({
        gst: 'Inclusive',
      });
    } else if (!inclusive || null) {
      this.course.get('gstValue').enable();
      this.course.patchValue({
        gst: 'Exclusive',
      });
    }
    this.calculateTotalFees();
  }

  calculateTotalFees() {
    let total = 0;
    if (this.course.get('gst').value === 'Inclusive') {
      total = this.fees;
    } else {
      if (this.exclusiveGst == null) {
        total = this.fees;
      } else {
        total = this.fees + (this.exclusiveGst / 100) * this.fees;
      }
    }
    this.course.get('totalFee').setValue(total.toString());
  }

  exclusive(event: any) {
    this.exclusiveGst = +event;
    const total = this.fees + (this.exclusiveGst / 100) * this.fees;
    this.course.patchValue({
      totalFee: total + '',
      gstValue: this.exclusiveGst === 0 ? '' : this.exclusiveGst + '',
    });
    this.calculateTotalFees();
  }

  courseFee(event: any) {
    this.fees = +event;
    this.calculateTotalFees();
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
