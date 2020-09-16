import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthInterceptor } from './services/auth-services/auth-interceptor/auth-interceptor';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AuthGuard } from './services/auth-services/auth-guards/auth.guard';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbToastrModule,
  NbButtonModule,
  NbWindowModule,
  NbSelectModule,
  NbLayoutModule,
  NbCardModule,
  NbCheckboxModule,
  NbRadioModule,
  NbInputModule,
  NbPopoverModule,
  NbStepperModule,
  NbIconModule,
} from '@nebular/theme';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { OtpComponent } from './authentication/otp/otp.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { TermsAndConditionsComponent } from './authentication/terms-and-conditions/terms-and-conditions.component';
import { IonicModule } from '@ionic/angular';

// import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    OtpComponent,
    ForgotPasswordComponent,
    TermsAndConditionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    NbContextMenuModule,
    NbSelectModule,
    NbCardModule,
    NbLayoutModule,
    AppRoutingModule,
    NbButtonModule,
    NbCheckboxModule,
    NbPopoverModule,
    NbRadioModule,
    NbStepperModule,
    NbInputModule,
    NbEvaIconsModule,
    NbIconModule,
    NbToastrModule.forRoot(),
    ReactiveFormsModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    IonicModule.forRoot(),
  ],
  entryComponents: [TermsAndConditionsComponent],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    LocalNotifications,
  ],
})
export class AppModule {}
