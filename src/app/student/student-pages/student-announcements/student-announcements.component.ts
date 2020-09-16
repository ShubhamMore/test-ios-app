import { StudentService } from './../../../services/student.service';
import { NbToastrService } from '@nebular/theme';
import { AnnouncementService } from './../../../services/communication/announcement.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-student-announcements',
  templateUrl: './student-announcements.component.html',
  styleUrls: ['./student-announcements.component.scss'],
})
export class StudentAnnouncementsComponent implements OnInit {
  announcements = [];
  courses = [];
  instituteId: string;
  studentId: string;
  batchCode: any = '';
  display = false;
  constructor(
    private toastrService: NbToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private announceService: AnnouncementService,
    private studentService: StudentService,
  ) {}

  ngOnInit() {
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.studentId = this.studentService.getStudent()._id;
    this.getCourses();
  }

  getCourses() {
    this.studentService.getStudentCoursesByInstitutes(this.instituteId).subscribe((res: any) => {
      this.courses = res;

      if (this.courses.length > 0) {
        this.batchCode = this.courses[0].batchCode;
        this.onSelectCourse(this.batchCode);
      }
      this.display = true;
    });
  }

  onSelectCourse(batchCode: any) {
    this.getAnnouncements(this.instituteId, batchCode);
  }

  onView(id: string) {
    this.router.navigate(['/student/view-announcement/', this.instituteId], {
      queryParams: { announcement: id },
    });
  }

  getAnnouncements(id: any, batch: any) {
    this.announceService.getStudentAnnouncements(id, batch).subscribe((data: any) => {
      this.announcements = data;
      this.display = true;
    });
  }

  openUrl(url: any) {
    window.open(url, '_system');
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
}
