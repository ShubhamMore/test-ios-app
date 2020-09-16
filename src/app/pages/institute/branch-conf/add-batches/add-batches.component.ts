import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiService } from '../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'ngx-add-batches',
  templateUrl: './add-batches.component.html',
  styleUrls: ['./add-batches.component.scss'],
})
export class AddBatchesComponent implements OnInit {
  courses: any[];
  batchUpdate: any;
  linearMode = true;
  batchForm: FormGroup;
  submitted = false;
  instituteId: string;
  batchId: string;
  edit: string;
  display: boolean;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit() {
    this.display = false;
    this.courses = [];
    this.route.queryParams.subscribe((data) => {
      this.batchId = data.batchId;
      this.edit = data.edit;
    });

    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getCourses(this.instituteId);
    this.batchForm = this.fb.group({
      course: ['', Validators.required],
      batchCode: ['', Validators.required],
      description: [''],
    });
    if (this.edit) {
      this.getBatch(this.batchId, this.instituteId);
    } else {
      this.display = true;
    }
  }

  getBatch(id: any, instituteId: any) {
    let param = new HttpParams();
    param = param.append('instituteId', instituteId);
    param = param.append('batchId', id);
    this.api.getBatch(param).subscribe((res: any[]) => {
      this.batchUpdate = res[0];
      this.batchForm.patchValue({
        course: this.batchUpdate.course,
        batchCode: this.batchUpdate.batchCode,
        description: this.batchUpdate.description,
      });
      this.display = true;
    });
  }

  getCourses(id: any) {
    this.api.getCourses(id).subscribe((res: any) => {
      this.courses = res.course;
    });
  }

  get f() {
    return this.batchForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.batchForm.markAllAsTouched();
    if (this.batchForm.invalid) {
      return;
    }
    if (this.edit === 'true') {
      let param = new HttpParams();
      param = param.append('instituteId', this.instituteId);
      param = param.append('batchId', this.batchId);

      const batch = {
        _id: this.batchId,
        course: this.batchForm.value.course,
        batchCode: this.batchForm.value.batchCode.trim(),
        description: this.batchForm.value.description,
      };
      this.api.updateBatch(param, batch).subscribe(
        (res: any) => {
          this.showToast('top-right', 'success', 'Successfully Updated');
          this.router.navigate(['/pages/institute/branch-config/manage-batch/', this.instituteId]);
        },
        (error: any) => {
          this.showToast('top-right', 'danger', error.error.message);
        },
      );
    }

    if (!this.edit) {
      const batch = {
        course: this.batchForm.value.course,
        batchCode: this.batchForm.value.batchCode.trim(),
        description: this.batchForm.value.description,
      };
      this.api.addBatch(this.instituteId, batch).subscribe(
        () => {
          this.showToast('top-right', 'success', 'Successfully Added');
          setTimeout(() => {
            this.router.navigate([
              '/pages/institute/branch-config/manage-batch/',
              this.instituteId,
            ]);
          }, 1000);
        },
        (err) => {
          this.showToast('top-right', 'danger', err.error.message);
        },
      );
    }
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }

  goManage() {
    let confirm = true;
    if (this.batchForm.touched) {
      confirm = window.confirm('If you go back the data will be lost.');
    }
    if (confirm) {
      this.location.back();
    }
  }
}
