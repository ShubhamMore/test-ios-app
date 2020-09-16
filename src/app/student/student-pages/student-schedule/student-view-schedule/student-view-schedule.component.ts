import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ScheduleService } from '../../../../services/schedule/schedule.service';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-student-view-schedule',
  templateUrl: './student-view-schedule.component.html',
  styleUrls: ['./student-view-schedule.component.scss'],
})
export class StudentViewScheduleComponent implements OnInit {
  instituteId: string;
  schedule: any;
  display: boolean;

  constructor(
    private active: ActivatedRoute,
    private scheduleService: ScheduleService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.display = false;
    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.active.queryParams.subscribe((param: Params) => {
      const schedule = param.schedule;
      this.getSchedule(schedule);
    });
  }

  getSchedule(id: string) {
    this.scheduleService.getScheduleDetails(id).subscribe(
      (res: any) => {
        this.schedule = res;
        this.display = true;
      },
      (error) => console.error(error),
    );
  }

  getScheduleDate(date: any) {
    const d = date.split('-');
    return `${d[2]}-${d[1]}-${d[0]}`;
  }

  back() {
    this.location.back();
  }
}
