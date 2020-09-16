import { OnlineClassLinkComponent } from './student-pages/online-class-link/online-class-link.component';
import { OnlineeClassComponent } from './student-pages/onlinee-class/onlinee-class.component';
import { StudentViewEnrollmentComponent } from './student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component';
import { StudentInstitutesComponent } from './student-institutes/student-institutes.component';
import { StudentViewAnnouncementComponent } from './student-pages/student-announcements/student-view-announcement/student-view-announcement.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentComponent } from './student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentAnnouncementsComponent } from './student-pages/student-announcements/student-announcements.component';
import { StudentScheduleComponent } from './student-pages/student-schedule/student-schedule.component';
import { StudentAttendanceComponent } from './student-pages/student-attendance/student-attendance.component';
import { StudentPerformanceReportComponent } from './student-pages/student-performance-report/student-performance-report.component';
import { StudentStudyMaterialComponent } from './student-pages/student-study-material/student-study-material.component';
import { StudentForumsChatsComponent } from './student-pages/student-forums-chats/student-forums-chats.component';
import { StudentEnrollmentDetailsComponent } from './student-pages/student-enrollment-details/student-enrollment-details.component';
import { StudentViewScheduleComponent } from './student-pages/student-schedule/student-view-schedule/student-view-schedule.component';
import { StudentMeetingComponent } from './student-pages/student-meeting/student-meeting.component';
import { StudentMentoringComponent } from './student-pages/student-mentoring/student-mentoring.component';
import { StudentForumCommentComponent } from './student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component';
import { StudentEaLiveGuard } from '../services/auth-services/auth-guards/student-ealive-auth.guard';
import { StudentTestComponent } from './student-pages/student-test/student-test.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: StudentHomeComponent,
      },

      {
        path: 'my-institutes',
        component: StudentInstitutesComponent,
      },

      {
        path: 'dashboard/:id',
        component: StudentDashboardComponent,
      },
      {
        path: 'announcements/:id',
        component: StudentAnnouncementsComponent,
      },
      {
        path: 'view-announcement/:id',
        component: StudentViewAnnouncementComponent,
      },
      {
        path: 'schedule/:id',
        component: StudentScheduleComponent,
      },
      {
        path: 'view-schedule/:id',
        component: StudentViewScheduleComponent,
      },
      {
        path: 'attendance/:id',
        component: StudentAttendanceComponent,
      },
      {
        path: 'performanceReport/:id',
        component: StudentPerformanceReportComponent,
      },
      {
        path: 'studentMaterial/:id',
        component: StudentStudyMaterialComponent,
      },
      {
        path: 'forumsAndChats/:id',
        component: StudentForumsChatsComponent,
      },
      {
        path: 'forumsAndChats/comments/:id',
        component: StudentForumCommentComponent,
      },
      {
        path: 'enrollmentDetails/:id',
        component: StudentEnrollmentDetailsComponent,
      },
      {
        path: 'viewEnrollment/:id',
        component: StudentViewEnrollmentComponent,
      },
      {
        path: 'meeting/:id',
        component: StudentMeetingComponent,
      },
      {
        path: 'mentoring/:id',
        component: StudentMentoringComponent,
      },
      {
        path: 'tests/:id',
        component: StudentTestComponent,
      },
      {
        path: 'onlineClasses/:id',
        component: OnlineeClassComponent,
        canActivate: [StudentEaLiveGuard],
      },
      {
        path: 'onlineClassLinks/:id',
        component: OnlineClassLinkComponent,
        canActivate: [StudentEaLiveGuard],
      },

      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
