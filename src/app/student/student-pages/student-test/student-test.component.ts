import { StudentService } from './../../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.scss'],
})
export class StudentTestComponent implements OnInit {
  display: boolean;
  instituteId: any;
  tests: any[];
  courses: any[];
  studentId: any;
  studentName: any;
  courseId: any = '';
  noTestsData: any;

  months: string[] = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  constructor(
    private api: ApiService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.display = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.studentId = this.studentService.getStudent()._id;
    this.studentName = this.studentService.getStudent().name;
    this.tests = [];
    this.getTests();
  }

  getTests() {
    this.api
      .getStudentTestScheduleByInstitute({
        instituteId: this.instituteId,
      })
      .subscribe(
        (res: any[]) => {
          this.display = true;
          this.tests = [];
          if (res.length === 0) {
            this.noTestsData = 'No Upcoming Tests';
          } else {
            res.sort((a1, a2) => {
              if (new Date(a1.test.date).getTime() >= new Date(a2.test.date).getTime()) {
                return 1;
              } else {
                return -1;
              }
            });

            this.tests = res;
          }
        },
        (err: any) => {},
      );
  }

  getScheduleDate(date: any) {
    const d = date.split('-');
    return `${d[2]}-${d[1]}-${d[0]}`;
  }

  back() {
    this.location.back();
  }

  getMonth(date: string) {
    const month = date.split('-')[1];
    return this.months[+month - 1];
  }

  getDay(date: string) {
    return date.split('-')[2];
  }
}
