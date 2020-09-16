import { AuthService } from './../../services/auth-services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OtpService } from '../../services/auth-services/otp/otp.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  phone: string;
  email: string;
  otp: string;
  loginOTP: boolean;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private otpService: OtpService,
    private toasterService: NbToastrService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((param: Params) => {
      this.loginOTP = param.type === 'login' ? true : false;
      this.phone = param.phone;
      this.email = param.email;
      this.getOtp();
    });
  }

  resendOtp() {
    this.getOtp();
  }

  getOtp() {
    this.otpService.getOtp(this.phone, this.email).subscribe(
      (res: any) => {
        this.showToast('top-right', 'success', 'OTP Sent to ' + this.phone);
      },
      (err: any) => {
        this.showToast('top-right', 'danger', err.error.message);
      },
    );
  }

  verifyOtp(otp: any) {
    const otpData = {
      verifyType: this.loginOTP ? 'loginUser' : 'createUser',
      otp: otp,
      phone: this.phone,
    };

    this.otpService.userVerify(otpData).subscribe(
      (res: any) => {
        if (this.loginOTP) {
          if (res.verifyEmail) {
            this.showToast('top-right', 'success', 'OTP Verification Successful');
            setTimeout(() => {
              this.showToast(
                'top-right',
                'warning',
                'Email is not Verified, Please Verify your Email',
              );
              setTimeout(() => {
                this.router.navigate(['/login'], {
                  relativeTo: this.route,
                });
              }, 500);
            }, 500);
          } else if (res._id) {
            this.authService.loginSuccess(res);
            this.showToast('top-right', 'success', 'OTP Verification Successful');
            setTimeout(() => {
              if (res.role === 'admin') {
                this.router.navigate(['/admin/home'], {
                  relativeTo: this.route,
                });
              } else if (res.role === 'institute' || res.role === 'employee') {
                this.router.navigate(['/pages/home'], {
                  relativeTo: this.route,
                });
              } else if (res.role === 'student') {
                this.router.navigate(['/student/home'], {
                  relativeTo: this.route,
                });
              } else {
                this.router.navigate(['/'], { relativeTo: this.route });
              }
            }, 1000);
          }
        } else {
          this.showToast('top-right', 'success', 'OTP verified, Successfully Registered');
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
        }
      },
      (err: any) => {
        this.showToast('top-right', 'danger', err.error.message);
      },
    );
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
}
