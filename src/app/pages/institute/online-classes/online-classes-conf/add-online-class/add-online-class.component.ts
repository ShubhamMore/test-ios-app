import { Location } from '@angular/common';
import { NbToastrService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-online-class',
  templateUrl: './add-online-class.component.html',
  styleUrls: ['./add-online-class.component.scss'],
})
export class AddOnlineClassComponent implements OnInit {
  onlineClassForm: FormGroup;
  instituteId: string;

  institute: any;

  meetingId: any;
  meeting: any;
  edit: any;

  courses: any[] = [];
  batches: any[] = [];
  teachers: any[] = [];

  display: boolean;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private location: Location,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.display = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe((param) => {
      this.meetingId = param.meeting;
      this.edit = param.edit;
    });
    this.getCourses(this.instituteId);

    this.onlineClassForm = this.fb.group({
      teacherId: ['', Validators.required],
      instituteId: [this.instituteId],
      courseId: ['', Validators.required],
      batchId: ['', Validators.required],
      startDate: ['', Validators.required],
      startTime: ['', Validators.required],
      duration: ['', Validators.required], // Num in Min
      topic: ['', Validators.required],
      agenda: [''],
      password: ['', Validators.required],
    });
  }

  getMeeting(id: string) {
    this.api.getOneMeeting({ id }).subscribe(
      (data: any) => {
        this.meeting = data;
        this.onlineClassForm.patchValue({
          teacherId: this.meeting.hostId,
          instituteId: this.meeting.instituteId,
          courseId: this.meeting.courseId,
          startDate: this.meeting.startTime.split('T')[0],
          startTime: this.meeting.startTime.split('T')[1].substring(0, 5),
          duration: this.meeting.duration,
          topic: this.meeting.topic,
          agenda: this.meeting.agenda,
          password: this.meeting.password,
        });

        this.onSelectCourse(this.meeting.courseId);

        this.onlineClassForm.patchValue({
          batchId: this.meeting.batchId,
        });
        this.display = true;
      },
      (err: any) => {},
    );
  }

  getCourses(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      this.courses = this.institute.course;
      this.getEmployees(this.instituteId);
    });
  }

  onSelectCourse(id: string) {
    this.batches = this.institute.batch.filter((b: any) => b.course === id);
  }

  getEmployees(instituteId: string) {
    this.api.getEmployeesByInstituteId(instituteId).subscribe((data: any) => {
      this.teachers = data;
      if (this.edit) {
        this.getMeeting(this.meetingId);
      } else {
        this.display = true;
      }
    });
  }

  saveOnlineClass() {
    if (this.onlineClassForm.valid) {
      const date =
        this.onlineClassForm.value.startDate + 'T' + this.onlineClassForm.value.startTime + ':00';

      if (!this.edit) {
        const onlineClass = {
          teacherId: this.onlineClassForm.value.teacherId,
          instituteId: this.instituteId,
          batchId: this.onlineClassForm.value.batchId,
          courseId: this.onlineClassForm.value.courseId,
          startTime: date,
          duration: this.onlineClassForm.value.duration,
          topic: this.onlineClassForm.value.topic,
          agenda: this.onlineClassForm.value.agenda,
          password: this.onlineClassForm.value.password,
        };
        this.api.createMeeting(onlineClass).subscribe(
          (res) => {
            this.showToast('top-right', 'success', 'Meeting Added Successfully');
            this.location.back();
          },
          (err: any) => {
            this.showToast('top-right', 'danger', err.err.message);
          },
        );
      } else {
        const onlineClass = {
          _id: this.meetingId,
          meetingId: this.meeting.meetingId,
          teacherId: this.onlineClassForm.value.teacherId,
          instituteId: this.instituteId,
          batchId: this.onlineClassForm.value.batchId,
          courseId: this.onlineClassForm.value.courseId,
          startTime: date,
          duration: this.onlineClassForm.value.duration,
          topic: this.onlineClassForm.value.topic,
          agenda: this.onlineClassForm.value.agenda,
          password: this.onlineClassForm.value.password,
        };

        this.api.updateMeeting(onlineClass).subscribe(
          (res) => {
            this.showToast('top-right', 'success', 'Meeting Updated Successfully');
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
