import { SharedModule } from './../../../services/shared.module';
// import { InstituteHeaderComponent } from './../../institute-header/institute-header.component';
import { ViewAnnouncementsComponent } from './../announcements/view-announcements/view-announcements.component';

import { ManageAnnouncementsComponent } from '../announcements/manage-announcements/manage-announcements.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationComponent } from '../communication.component';
import { CommRoutingModule } from './comm-routing.module';
import { AnnouncementsComponent } from '../announcements/announcements.component';
import {
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbLayoutModule,
  NbButtonModule,
  NbIconModule,
} from '@nebular/theme';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForumComponent } from '../forum/forum.component';
import { AddForumComponent } from '../forum/add-forum/add-forum.component';
import { MyForumComponent } from '../forum/my-forum/my-forum.component';
import { ForumDetailsComponent } from '../forum/forum-details/forum-details.component';

@NgModule({
  declarations: [
    CommunicationComponent,
    AnnouncementsComponent,
    ManageAnnouncementsComponent,
    ViewAnnouncementsComponent,
    ForumComponent,
    AddForumComponent,
    MyForumComponent,
    ForumDetailsComponent,
    // InstituteHeaderComponent,
  ],
  imports: [
    CommonModule,
    CommRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    SharedModule,
    NbInputModule,
    NbSelectModule,
    NbCheckboxModule,
    AngularEditorModule,
    NbLayoutModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
  ],
})
export class CommunicationModule {}
