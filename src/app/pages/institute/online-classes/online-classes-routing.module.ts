import { EaLiveLitePlusGuard } from './../../../services/auth-services/auth-guards/ea-live-lite-plus.guard';
import { EaLiveValuePowerGuard } from './../../../services/auth-services/auth-guards/ea-live-value-power.guard';
// tslint:disable-next-line: max-line-length
import { AddOnlineClassLinkComponent } from './online-class-links/add-online-class-link/add-online-class-link.component';
import { OnlineClassLinksComponent } from './online-class-links/online-class-links.component';
import { EaLiveGuard } from './../../../services/auth-services/auth-guards/ea-live.guard';
import { OnlineClassesUpgradeComponent } from './online-classes-upgrade/online-classes-upgrade.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnlineClassesConfComponent } from './online-classes-conf/online-classes-conf.component';
import { AddOnlineClassComponent } from './online-classes-conf/add-online-class/add-online-class.component';
// tslint:disable-next-line: max-line-length
import { OnlineClassSettingsComponent } from './online-classes-conf/online-class-settings/online-class-settings.component';
import { ManageOnlineClassComponent } from './online-classes-conf/manage-online-class/manage-online-class.component';
import { UtilitiesComponent } from './utilities/utilities.component';

const routes = [
  {
    path: '',
    component: OnlineClassesConfComponent,
    children: [
      {
        path: 'settings/:id',
        component: OnlineClassSettingsComponent,
        canActivate: [EaLiveGuard, EaLiveValuePowerGuard],
      },
      {
        path: 'create-class/:id',
        component: AddOnlineClassComponent,
        canActivate: [EaLiveGuard, EaLiveValuePowerGuard],
      },
      {
        path: 'create-class/:id/edit',
        component: AddOnlineClassComponent,
        canActivate: [EaLiveGuard, EaLiveValuePowerGuard],
      },
      {
        path: 'manage-class/:id',
        component: ManageOnlineClassComponent,
        canActivate: [EaLiveGuard, EaLiveValuePowerGuard],
      },
      {
        path: 'create-class-link/:id',
        component: AddOnlineClassLinkComponent,
        canActivate: [EaLiveGuard, EaLiveLitePlusGuard],
      },
      {
        path: 'create-class-link/:id/edit',
        component: AddOnlineClassLinkComponent,
        canActivate: [EaLiveGuard, EaLiveLitePlusGuard],
      },
      {
        path: 'manage-class-link/:id',
        component: OnlineClassLinksComponent,
        canActivate: [EaLiveGuard, EaLiveLitePlusGuard],
      },

      { path: ':id', component: OnlineClassesUpgradeComponent },

      { path: 'utilities/:id', component: UtilitiesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineClassesRoutingModule {}
