import { ReactiveFormsModule } from '@angular/forms';
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
  NbTabsetModule,
  NbUserModule,
  NbInputModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';

import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ButtonModule } from 'primeng/button';

import { HomeComponent } from './home/home.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { MembershipComponent } from './membership/membership.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckoutModule } from './checkout/checkout.module';
import { SmsRechargeComponent } from './e-commerce/sms-recharge/sms-recharge.component';

// import { InstAddDialogComponent } from './institute/add-institute/inst-add-dialog/inst-add-dialog.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ReactiveFormsModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    ButtonModule,
    NbLayoutModule,
    NbTabsetModule,
    NbCardModule,
    NbUserModule,
    NbEvaIconsModule,
    NbIconModule,
    NbListModule,
    NbSelectModule,
    NbDatepickerModule,
    NbInputModule,
    NbButtonModule,

    CheckoutModule,
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    ECommerceComponent,
    SmsRechargeComponent,
    MembershipComponent,
    ChangePasswordComponent,
    ProfileComponent,

    // ClassifiedComponent,
    // CreateClassifiedComponent,
    // ManageClassifiedComponent,
    // BusinessComponent,
    // CreateBusinessComponent,
    // ManageBusinessComponent,
  ],
})
export class PagesModule {}
