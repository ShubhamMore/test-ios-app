import { StudentService } from './../../../services/student.service';
import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-student-mentoring',
  templateUrl: './student-mentoring.component.html',
  styleUrls: ['./student-mentoring.component.scss'],
})
export class StudentMentoringComponent implements OnInit {
  instituteId: string;
  courseId: string;
  batchId: string;
  pastMentorings: any[] = [];
  upcomingMentorings: any[] = [];
  display: boolean;
  constructor(
    private studentService: StudentService,
    private toasterService: NbToastrService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.getMentorings({
      instituteId: this.instituteId,
    });
  }

  getMentorings(data: any) {
    this.studentService.getMentoringForStudent(data).subscribe((res: any) => {
      this.pastMentorings = res.pastMentorings;
      this.upcomingMentorings = res.upcomingMentorings;
      this.display = true;
    });
  }

  getTime(time: any) {
    const hour = +time.split(':')[0];
    const min = time.split(':')[1];
    let t = '';
    if (hour > 12) {
      t = (hour - 12).toString() + ':' + min + ' PM';
    } else {
      t = hour.toString() + ':' + min + ' AM';
    }
    return t;
  }

  getDate(date: any) {
    const d = date.split('-');
    return `${d[2]}-${d[1]}-${d[0]}`;
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
