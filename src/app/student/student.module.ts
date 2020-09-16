import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentForumCommentComponent } from './student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component';

import { StudentComponent } from './student.component';
import { NgModule } from '@angular/core';

import {
  NbMenuModule,
  NbLayoutModule,
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbSelectModule,
  NbButtonModule,
  NbDatepickerModule,
  NbAccordionModule,
  NbInputModule,
  NbCheckboxModule,
  NbTabsetModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ThemeModule } from '../@theme/theme.module';

import { ButtonModule } from 'primeng/button';

import { StudentRoutingModule } from './student-routing.module';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentAnnouncementsComponent } from './student-pages/student-announcements/student-announcements.component';
import { StudentScheduleComponent } from './student-pages/student-schedule/student-schedule.component';
import { StudentAttendanceComponent } from './student-pages/student-attendance/student-attendance.component';
import { StudentPerformanceReportComponent } from './student-pages/student-performance-report/student-performance-report.component';
import { StudentStudyMaterialComponent } from './student-pages/student-study-material/student-study-material.component';
import { StudentForumsChatsComponent } from './student-pages/student-forums-chats/student-forums-chats.component';
import { StudentEnrollmentDetailsComponent } from './student-pages/student-enrollment-details/student-enrollment-details.component';
import { StudentViewAnnouncementComponent } from './student-pages/student-announcements/student-view-announcement/student-view-announcement.component';
import { StudentViewScheduleComponent } from './student-pages/student-schedule/student-view-schedule/student-view-schedule.component';
import { ChartsModule } from 'ng2-charts';
import { StudentMeetingComponent } from './student-pages/student-meeting/student-meeting.component';
import { StudentMentoringComponent } from './student-pages/student-mentoring/student-mentoring.component';
import { StudentInstitutesComponent } from './student-institutes/student-institutes.component';
import { StudentViewEnrollmentComponent } from './student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component';
import { OnlineeClassComponent } from './student-pages/onlinee-class/onlinee-class.component';
import { SharedModule } from '../services/shared.module';
import { StudentInstituteHeaderComponent } from './student-dashboard/student-institute-header/student-institute-header.component';
import { StudentTestComponent } from './student-pages/student-test/student-test.component';
import { OnlineClassLinkComponent } from './student-pages/online-class-link/online-class-link.component';
import { ViewLinksComponent } from './student-pages/online-class-link/view-links/view-links.component';
import { PlayLinksComponent } from './student-pages/online-class-link/play-links/play-links.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbEvaIconsModule,
    NbIconModule,
    NbListModule,
    NbSelectModule,
    NbTabsetModule,
    NbDatepickerModule,
    NbAccordionModule,
    NbButtonModule,
    ChartsModule,
    NbCheckboxModule,
    NbIconModule,
  ],
  declarations: [
    StudentComponent,
    StudentHomeComponent,
    StudentDashboardComponent,
    StudentAnnouncementsComponent,
    StudentScheduleComponent,
    StudentAttendanceComponent,
    StudentPerformanceReportComponent,
    StudentStudyMaterialComponent,
    StudentForumsChatsComponent,
    StudentEnrollmentDetailsComponent,
    StudentViewAnnouncementComponent,
    StudentInstitutesComponent,
    StudentForumCommentComponent,
    StudentViewEnrollmentComponent,

    StudentViewScheduleComponent,

    StudentMeetingComponent,

    StudentMentoringComponent,

    OnlineeClassComponent,

    StudentInstituteHeaderComponent,

    StudentTestComponent,

    OnlineClassLinkComponent,

    ViewLinksComponent,

    PlayLinksComponent,
  ],
})
export class StudentModule {}
