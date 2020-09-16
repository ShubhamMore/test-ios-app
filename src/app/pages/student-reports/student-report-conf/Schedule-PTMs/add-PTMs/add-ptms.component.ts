import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-add-ptms',
  templateUrl: './add-ptms.component.html',
  styleUrls: ['./add-ptms.component.scss'],
})
export class AddPTMsComponent implements OnInit {
  instituteId: string;
  batches: any[] = [];
  institute: any;
  display: boolean;
  ptmForm: FormGroup;
  edit: string;
  ptmId: string;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.display = false;
    this.route.queryParams.subscribe((data) => {
      this.edit = data.edit;
      this.ptmId = data.ptmId;
    });
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getCourses(this.instituteId);

    this.ptmForm = this.fb.group({
      courseId: ['', Validators.required],
      batchId: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      topic: [''],
      description: [''],
      instituteId: [this.instituteId],
    });
  }
  getPtm(ptmId: string) {
    this.api.getSinglePtm({ _id: ptmId }).subscribe(
      (res: any) => {
        this.ptmForm.patchValue({
          courseId: res.courseId,
          date: res.date,
          time: res.time,
          topic: res.topic,
          description: res.description,
        });
        this.onSelectCourse(res.courseId);
        this.ptmForm.patchValue({ batchId: res.batchId });
        this.display = true;
      },
      (err) => {},
    );
  }

  getCourses(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      if (this.edit) {
        this.getPtm(this.ptmId);
      } else {
        this.display = true;
      }
    });
  }

  onSelectCourse(id: string) {
    this.batches = this.institute.batch.filter((b: any) => b.course === id);
  }

  savePtm() {
    this.ptmForm.markAllAsTouched();
    if (this.ptmForm.valid) {
      if (!this.edit) {
        this.api.addPtm(this.ptmForm.value).subscribe(
          (res) => {
            this.showToast('top-right', 'success', 'PTMs Added Successfully');
            this.router.navigate(['/pages/student-reports/manage-ptms/', this.instituteId]);
          },
          (err) => {
            this.showToast('top-right', 'danger', err.error.message);
          },
        );
      } else {
        const ptmData = this.ptmForm.value;
        ptmData._id = this.ptmId;
        this.api.updatePtm(ptmData).subscribe(
          (res) => {
            this.showToast('top-right', 'success', 'PTMs Updated Successfully');
            this.router.navigate(['/pages/student-reports/manage-ptms/', this.instituteId]);
          },
          (err) => {
            this.showToast('top-right', 'danger', err.error.message);
          },
        );
      }
    }
  }
  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
