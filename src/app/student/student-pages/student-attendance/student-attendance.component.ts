import { StudentService } from './../../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss'],
})
export class StudentAttendanceComponent implements OnInit {
  display: boolean;
  instituteId: any;
  attendance: any[];
  present = 0;
  absent = 0;
  total = 0;
  courses: any[];
  studentId: any;
  studentName: any;
  courseId: any = '';
  noAttendanceData: any;
  constructor(
    private api: ApiService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.display = false;
    this.noAttendanceData = 'Select Course';
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.studentId = this.studentService.getStudent()._id;
    this.studentName = this.studentService.getStudent().name;
    this.attendance = [];
    this.courses = [];
    this.getCourses(this.instituteId);
  }

  getCourses(instituteId) {
    this.studentService.getStudentCoursesByInstitutes(instituteId).subscribe(
      (res: any[]) => {
        this.courses = res;
        if (this.courses.length > 0) {
          this.courseId = this.courses[0]._id;
          this.onSelectCourse(this.courseId);
        }
        this.display = true;
      },
      (err: any) => {},
    );
  }

  onSelectCourse(id: any) {
    if (id !== '') {
      this.getAttendance(id);
    }
  }

  getAttendance(courseId: any) {
    this.api
      .getStudentAttendanceByCourse({
        studentId: this.studentId,
        instituteId: this.instituteId,
        courseId,
      })
      .subscribe(
        (res: any[]) => {
          this.total = res.length;
          this.present = 0;
          this.absent = 0;
          this.attendance = [];
          if (this.total === 0) {
            this.noAttendanceData = 'No Attendance Found';
          } else {
            res.sort((a1, a2) => {
              if (new Date(a1.date).getTime() >= new Date(a2.date).getTime()) {
                return 1;
              } else {
                return -1;
              }
            });

            res.forEach((atten: any) => {
              const newAtten = {
                date: this.getScheduleDate(atten.date),
                status: atten.attendance.attendanceStatus,
              };
              this.attendance.push(newAtten);
              if (newAtten.status) {
                this.present += 1;
              } else {
                this.absent += 1;
              }
            });
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
}
