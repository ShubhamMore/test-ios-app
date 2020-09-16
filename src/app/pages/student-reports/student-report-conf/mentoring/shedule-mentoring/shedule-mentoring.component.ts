import { NbToastrService } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-shedule-mentoring',
  templateUrl: './shedule-mentoring.component.html',
  styleUrls: ['./shedule-mentoring.component.scss'],
})
export class SheduleMentoringComponent implements OnInit {
  student: any;
  studentId: string;
  instituteId: any;
  editMentoringId: string;
  display: boolean;
  mentorings: any[];
  teachers: any[];

  mentoringForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.display = false;
    this.mentorings = [];
    this.teachers = [];
    this.editMentoringId = null;
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe((data) => {
      this.studentId = data.student;
    });
    this.mentoringForm = this.fb.group({
      instituteId: [this.instituteId, Validators.required],
      studentId: [this.studentId, Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      note: ['', Validators.required],
      teacherId: ['', Validators.required],
    });

    if (!this.studentId) {
      this.showToast('top-right', 'danger', 'No Student Found');
      this.location.back();
    } else {
      this.getEmployees(this.instituteId);
      this.getMentoring();
    }
  }

  getMentoring() {
    this.api.getMentorings({ instituteId: this.instituteId, studentId: this.studentId }).subscribe(
      (res: any) => {
        this.mentorings = res;
      },
      (err: any) => {
        this.showToast('top-right', 'danger', err.err.message);
      },
    );
  }

  getEmployees(instituteId: string) {
    this.api.getEmployeesByInstituteId(instituteId).subscribe((data: any) => {
      this.teachers = data;
      this.display = true;
    });
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }

  editMentoring(i: number) {
    this.editMentoringId = this.mentorings[i]._id;
    this.mentoringForm.patchValue({
      date: this.mentorings[i].date,
      time: this.mentorings[i].time,
      note: this.mentorings[i].note,
      teacherId: this.mentorings[i].teacherId,
    });
  }

  deleteMentoring(id: string, i: number) {
    this.api.deleteMentoring({ _id: id }).subscribe(
      (res) => {
        this.mentorings.splice(i, 1);
        this.showToast('top-right', 'success', 'Mentoring Session Deleted Successfully');
      },
      (err) => {
        this.showToast('top-right', 'danger', err.error.message);
      },
    );
  }

  cancelEdit() {
    this.mentoringForm.reset();
    this.editMentoringId = null;
  }

  save() {
    this.mentoringForm.markAllAsTouched();
    if (this.mentoringForm.valid) {
      if (!this.editMentoringId) {
        this.api.addMentoring(this.mentoringForm.value).subscribe(
          (res: any) => {
            this.getMentoring();
            this.showToast('top-right', 'success', 'Mentoring Session Added Successfully');
            this.ngOnInit();
          },
          (err: any) => {
            this.showToast('top-right', 'danger', err.error.message);
          },
        );
      } else {
        const mentoring = this.mentoringForm.value;
        mentoring._id = this.editMentoringId;
        this.api.updateMentoring(mentoring).subscribe(
          (res) => {
            this.showToast('top-right', 'success', 'Mentoring Session Updated Successfully');
            this.ngOnInit();
          },
          (err) => {
            this.showToast('top-right', 'danger', err.error.message);
          },
        );
      }
    }
  }
}
