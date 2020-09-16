// import { InstituteHeaderComponent } from './../../institute-header/institute-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineClassesRoutingModule } from './online-classes-routing.module';
// tslint:disable-next-line: max-line-length
import { OnlineClassSettingsComponent } from './online-classes-conf/online-class-settings/online-class-settings.component';
import { ManageOnlineClassComponent } from './online-classes-conf/manage-online-class/manage-online-class.component';
import { AddOnlineClassComponent } from './online-classes-conf/add-online-class/add-online-class.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbLayoutModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbSelectModule,
  NbMenuModule,
  NbAccordionModule,
  NbListModule,
  NbTabsetModule,
  NbIconModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { OnlineClassesConfComponent } from './online-classes-conf/online-classes-conf.component';
import { OnlineClassesUpgradeComponent } from './online-classes-upgrade/online-classes-upgrade.component';
import { OnlineClassLinksComponent } from './online-class-links/online-class-links.component';
// tslint:disable-next-line: max-line-length
import { AddOnlineClassLinkComponent } from './online-class-links/add-online-class-link/add-online-class-link.component';
import { UploadClassRecordingComponent } from './upload-class-recording/upload-class-recording.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ViewClassRecordingComponent } from './upload-class-recording/view-class-recording/view-class-recording.component';
import { PlayVideoRecordingComponent } from './upload-class-recording/view-class-recording/play-video-recording/play-video-recording.component';

@NgModule({
  declarations: [
    OnlineClassesConfComponent,
    OnlineClassSettingsComponent,
    ManageOnlineClassComponent,
    AddOnlineClassComponent,
    OnlineClassesUpgradeComponent,
    OnlineClassLinksComponent,
    AddOnlineClassLinkComponent,
    ViewClassRecordingComponent,
    UploadClassRecordingComponent,
    UtilitiesComponent,
    PlayVideoRecordingComponent,
    // InstituteHeaderComponent,
  ],
  imports: [
    CommonModule,
    OnlineClassesRoutingModule,
    ReactiveFormsModule,
    NbCardModule,
    NbTabsetModule,
    NbLayoutModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbSelectModule,
    NbMenuModule,
    NbAccordionModule,
    NbEvaIconsModule,
    NbListModule,
    NbIconModule,
  ],
})
export class OnlineClassesModule {}
