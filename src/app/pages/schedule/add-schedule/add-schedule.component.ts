import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ScheduleService } from '../../../services/schedule/schedule.service';
import { NbToastrService } from '@nebular/theme';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss'],
})
export class AddScheduleComponent implements OnInit {
  display: boolean;

  edit: string;
  scheduleId: string;

  scheduleForm: FormGroup;
  schedule: any;

  instituteId: string;
  institute: any;
  courseId: string;
  batchId: string;

  schedules: any[];

  scheduleStartTime: string;
  scheduleEndTime: string;

  batches: any[] = [];
  teachers: any[] = [];

  days: string[] = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  date: number;
  noOfDays: number;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private scheduleService: ScheduleService,
    private toasterService: NbToastrService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.display = false;
    const date = new Date();
    this.date = date.getTime() - ((date.getDay() % 7) - 1) * (24 * 60 * 60 * 1000);
    this.schedules = [];
    this.instituteId = this.route.snapshot.paramMap.get('id');

    this.route.queryParams.subscribe((param: Params) => {
      this.edit = param.edit;
      this.scheduleId = param.schedule;
    });

    this.scheduleForm = this.fb.group(
      {
        instituteId: [this.instituteId],
        courseId: ['', Validators.required],
        batchId: ['', Validators.required],
        scheduleStart: [this.constructDate(this.date), Validators.required],
        scheduleEnd: ['', Validators.required],
        days: this.fb.array([]),
        recurrence: [false],
      },
      {
        validators: this.dateValidator.bind(this),
      },
    );

    this.getCourses(this.instituteId);

    this.fromDatePicked(this.constructDate(this.date));
  }

  dateValidator(group: FormGroup): { [s: string]: boolean } {
    if (
      this.getDate(group.value.scheduleStart).getTime() >
      this.getDate(group.value.scheduleEnd).getTime()
    ) {
      return { invalidScheduleEndDate: true };
    }
    return null;
  }

  onDaySelect(event: any, i: any) {
    if (event) {
      this.enableDay(i);
    } else {
      this.disableDay(i);
    }
  }

  startTimePicked(startTime: any) {
    this.scheduleStartTime = startTime;
    const scheduleDays = this.scheduleForm.get('days') as FormArray;
    scheduleDays.controls.forEach((day) => {
      day.patchValue({ startTime });
    });
  }

  endTimePicked(endTime: any) {
    this.scheduleEndTime = endTime;
    const scheduleDays = this.scheduleForm.get('days') as FormArray;
    scheduleDays.controls.forEach((day) => {
      day.patchValue({ endTime });
    });
  }

  getEmployees(instituteId: string) {
    this.api.getEmployeesByInstituteId(instituteId).subscribe((data: any) => {
      this.teachers = data;
      if (this.edit) {
        this.getSchedule(this.scheduleId);
      } else {
        this.display = true;
      }
    });
  }

  getSchedule(id: string) {
    this.scheduleService.getSchedule(id).subscribe(
      (res: any) => {
        this.schedule = res;
        this.scheduleForm.patchValue({
          courseId: this.schedule.courseId,
          scheduleStart: this.schedule.scheduleStart,
          scheduleEnd: this.schedule.scheduleEnd,
          recurrence: this.schedule.recurrence,
        });
        this.onSelectCourse(this.schedule.courseId);
        this.scheduleForm.patchValue({ batchId: this.schedule.batchId });

        // this.scheduleForm.get('scheduleStart').disable();
        // this.scheduleForm.get('scheduleEnd').disable();
        this.scheduleStartTime = this.schedule.days[0].startTime;
        this.scheduleEndTime = this.schedule.days[0].endTime;
        const scheduleDays = this.scheduleForm.get('days') as FormArray;
        scheduleDays.controls = [];
        this.schedule.days.forEach((day: any, i: number) => {
          const scheduleData = {
            day: day.day,
            date: day.date,
            startTime: day.startTime,
            endTime: day.endTime,
            teacher: day.teacher,
            topic: day.topic,
            select: day.select,
          };
          this.addScheduleDay(scheduleData);
          if (day.select) {
            this.enableDay(i);
          } else {
            this.disableDay(i);
          }
        });
        this.display = true;
      },
      (error: any) => {
        this.showToast('top-right', 'danger', error.error.message);
        console.error(error);
      },
    );
  }

  scheduleDay(dayData: any) {
    return this.fb.group({
      day: [dayData.day ? dayData.day : ''],
      date: [dayData.date ? dayData.date : ''],
      startTime: [dayData.startTime ? dayData.startTime : ''],
      endTime: [dayData.endTime ? dayData.endTime : ''],
      teacher: [dayData.teacher ? dayData.teacher : ''],
      topic: [dayData.topic ? dayData.topic : ''],
      select: [dayData.select ? true : false],
    });
  }

  addScheduleDay(scheduleData: any) {
    const scheduleDays = this.scheduleForm.get('days') as FormArray;
    scheduleDays.push(this.scheduleDay(scheduleData));
  }

  enableDay(i: number) {
    const scheduleDays = this.scheduleForm.get('days') as FormArray;
    scheduleDays.controls[i].get('startTime').enable();
    scheduleDays.controls[i].get('endTime').enable();
    scheduleDays.controls[i].get('teacher').enable();
    scheduleDays.controls[i].get('topic').enable();
  }

  disableDay(i: number) {
    const scheduleDays = this.scheduleForm.get('days') as FormArray;
    scheduleDays.controls[i].get('startTime').disable();
    scheduleDays.controls[i].get('endTime').disable();
    scheduleDays.controls[i].get('teacher').disable();
    scheduleDays.controls[i].get('topic').disable();
  }

  generateSchedule() {
    const scheduleDays = this.scheduleForm.get('days') as FormArray;
    scheduleDays.controls = [];
    // const currentDay = this.getDate(this.date).getDay();
    for (let i = 0; i < this.noOfDays; i++) {
      const date = this.constructDate(this.date + i * 24 * 60 * 60 * 1000);

      const day = new Date(this.getFormattedDate(date)).getDay();
      const scheduleData = {
        day: this.days[day],
        date: date,
        startTime: this.scheduleStartTime,
        endTime: this.scheduleEndTime,
        teacher: '',
        topic: '',
        select: false,
      };
      this.addScheduleDay(scheduleData);
      this.disableDay(i);
    }
  }

  getDate(date: number): Date {
    return new Date(date);
  }

  getFormattedDate(date: string): string {
    return date + 'T17:00';
  }

  fromDatePicked(date: any) {
    if (typeof date === 'string') {
      date = this.getFormattedDate(date);
    }
    this.date = new Date(date).getTime();
    if (!this.schedule) {
      const noOfDays = 7 - this.getDate(this.date).getDay();
      const nextSunday = this.constructDate(this.date + noOfDays * (24 * 60 * 60 * 1000));
      this.scheduleForm.patchValue({ scheduleEnd: nextSunday });
      this.noOfDays = noOfDays + 1;
      this.generateSchedule();
    } else {
      const scheduleStart = this.schedule.scheduleStart;
      const scheduleEnd = this.schedule.scheduleEnd;
      const endDate = new Date(scheduleEnd).getTime() - new Date(scheduleStart).getTime();
      const noOfDays = endDate / (24 * 60 * 60 * 1000);
      const nextSunday = this.constructDate(this.date + noOfDays * (24 * 60 * 60 * 1000));
      this.scheduleForm.patchValue({ scheduleEnd: nextSunday });
      this.noOfDays = noOfDays + 1;
      this.setRecurrenceDates(scheduleStart);
    }
  }

  setRecurrenceDates(scheduleStart: any) {
    const scheduleDays = this.scheduleForm.get('days') as FormArray;

    this.schedule.days.forEach((day: any, i: number) => {
      const nextDate = new Date(day.date).getTime() - new Date(scheduleStart).getTime();
      const noOfDays = nextDate / (24 * 60 * 60 * 1000);
      const date = this.constructDate(this.date + noOfDays * (24 * 60 * 60 * 1000));
      const weekDay = new Date(date).getDay();
      scheduleDays.controls[i].patchValue({ day: this.days[weekDay], date });
    });
  }

  toDatePicked(date: any) {
    if (typeof date === 'string') {
      date = this.getFormattedDate(date);
    }
    date = new Date(date).getTime();
    this.noOfDays = (date - this.date) / (24 * 60 * 60 * 1000) + 1;
    this.schedule = null;
    this.generateSchedule();
  }

  // Construct date in yyyy-MM-dd format to set in DOM form field
  constructDate(dateInMillisecond: number) {
    const date = new Date(dateInMillisecond);
    return `${date.getFullYear()}-${this.appendZero(date.getMonth() + 1)}-${this.appendZero(
      date.getDate(),
    )}`;
  }

  // Append zero for single digit Date and Month
  appendZero(n: number): string {
    if (n < 10) {
      return '0' + n;
    }
    return '' + n;
  }

  getScheduleDate(date: any) {
    const d = date.split('-');
    return `${d[2]}-${d[1]}-${d[0]}`;
  }

  getCourses(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      this.getEmployees(this.instituteId);
    });
  }

  onSelectCourse(id: string) {
    this.courseId = id;
    this.batches = this.institute.batch.filter((b: any) => b.course === id);
  }

  onSelectBatch(id: string) {
    this.batchId = id;
    if (!this.edit) {
      this.searchRecurrenceSchedules();
    }
  }

  searchRecurrenceSchedules() {
    this.scheduleService
      .getScheduleByBatch(this.instituteId, this.courseId, this.batchId)
      .subscribe((res: any[]) => {
        this.schedules = res;
      });
  }

  recurrence(check: boolean) {
    this.scheduleForm.patchValue({
      recurrence: check,
    });
  }

  useRecurrenceSchedule(index: number) {
    this.schedule = this.schedules[index];
    this.scheduleForm.patchValue({
      scheduleStart: this.schedule.scheduleStart,
      scheduleEnd: this.schedule.scheduleEnd,
      recurrence: this.schedule.recurrence,
    });

    this.scheduleStartTime = this.schedule.days[0].startTime;
    this.scheduleEndTime = this.schedule.days[0].endTime;
    const scheduleDays = this.scheduleForm.get('days') as FormArray;
    scheduleDays.controls = [];
    this.schedule.days.forEach((day: any, i: number) => {
      const scheduleData = {
        day: day.day,
        date: day.date,
        startTime: day.startTime,
        endTime: day.endTime,
        teacher: day.teacher,
        topic: day.topic,
        select: day.select,
      };
      this.addScheduleDay(scheduleData);
      if (day.select) {
        this.enableDay(i);
      } else {
        this.disableDay(i);
      }
    });
  }

  addAnotherClass(i: number) {
    const scheduleDays = this.scheduleForm.get('days') as FormArray;
    const day: any = scheduleDays.controls[i].value;
    const scheduleData: any = {
      day: day.day,
      date: day.date,
      startTime: '',
      endTime: '',
      teacher: '',
      topic: '',
      select: false,
    };
    const schedule = this.scheduleDay(scheduleData);
    scheduleDays.controls.splice(i + 1, 0, schedule);
    if (this.edit) {
    }
    this.disableDay(i + 1);
  }

  removeClass(i: number) {
    const scheduleDays = this.scheduleForm.get('days') as FormArray;
    scheduleDays.controls.splice(i, 1);
    if (this.edit) {
      this.scheduleForm.value.days.splice(i, 1);
    }
  }

  onSubmit() {
    this.scheduleForm.markAllAsTouched();
    if (this.scheduleForm.invalid) {
      return;
    }
    if (!this.edit) {
      const scheduleDays = this.scheduleForm.get('days') as FormArray;

      const schedule = this.scheduleForm.value;
      const days: any[] = [];
      scheduleDays.controls.forEach((day: any) => {
        if (day.value.select) {
          day.value.teacher = day.value.teacher === '' ? null : day.value.teacher;
        }
        days.push(day.value);
      });
      schedule.days = days;
      this.scheduleService.addSchedule(schedule).subscribe(
        (res: any) => {
          this.showToast('top-right', 'success', 'Schedule Added Successfully');
          setTimeout(() => {
            this.back();
          }, 200);
        },
        (error: any) => {
          this.showToast('top-right', 'danger', error.error.message);
          console.error(error);
        },
      );
    } else {
      const scheduleDays = this.scheduleForm.get('days') as FormArray;

      this.scheduleForm.value.scheduleStart = this.schedule.scheduleStart;
      this.scheduleForm.value.scheduleEnd = this.schedule.scheduleEnd;
      const schedule = this.scheduleForm.value;
      const days: any[] = [];
      scheduleDays.controls.forEach((day: any) => {
        if (day.value.select) {
          day.value.teacher = day.value.teacher === '' ? null : day.value.teacher;
        }
        days.push(day.value);
      });
      schedule.days = days;

      this.scheduleService.updateSchedule(schedule, this.schedule._id).subscribe(
        (res: any) => {
          this.showToast('top-right', 'success', 'Schedule Updated Successfully');
          setTimeout(() => {
            this.back();
          }, 1000);
        },
        (error: any) => {
          this.showToast('top-right', 'danger', error.error.message);
        },
      );
    }
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }

  back() {
    this.location.back();
  }
}
