import { ViewAnnouncementsComponent } from './../announcements/view-announcements/view-announcements.component';
import { ManageAnnouncementsComponent } from './../announcements/manage-announcements/manage-announcements.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommunicationComponent } from '../communication.component';
import { AnnouncementsComponent } from '../announcements/announcements.component';
import { ForumComponent } from '../forum/forum.component';
import { AddForumComponent } from '../forum/add-forum/add-forum.component';
import { MyForumComponent } from '../forum/my-forum/my-forum.component';
import { ForumDetailsComponent } from '../forum/forum-details/forum-details.component';
const routes: Routes = [
  {
    path: '',
    component: CommunicationComponent,
    children: [
      { path: 'announcements/:id', component: ManageAnnouncementsComponent },
      { path: 'view-announcements/:id', component: ViewAnnouncementsComponent },
      { path: 'add-announcements/:id', component: AnnouncementsComponent },
      { path: 'forum/:id', component: ForumComponent },
      { path: 'add-forum/:id', component: AddForumComponent },
      { path: 'my-forum/:id', component: MyForumComponent },
      { path: 'forum-detail/:id', component: ForumDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommRoutingModule {}
