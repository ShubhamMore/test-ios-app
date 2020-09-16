import { Observable } from 'rxjs';
import { AuthResponseData } from './../../services/auth-services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth-services/auth.service';
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        userId: new FormControl(null, { validators: [Validators.required, Validators.email] }),
        password: new FormControl(null, { validators: [Validators.required] }),
      },
      {},
    );
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const userId = this.loginForm.value.userId;
    const password = this.loginForm.value.password;

    let authObs: Observable<AuthResponseData>;

    authObs = this.authService.login(userId, password);

    authObs.subscribe(
      (resData: any) => {
        if (resData.verifyOtp) {
          this.router.navigate(['/otp'], {
            relativeTo: this.route,
            queryParams: {
              phone: resData.phone,
              email: resData.email,
              type: 'login',
            },
          });
        } else if (resData.verifyEmail) {
          this.showToast('top-right', 'warning', `Email is not Verified, Please Verify your Email`);
        } else {
          if (resData.role === 'admin') {
            this.showToast('top-right', 'success', `Login Success`);
            this.router.navigate(['/admin/home'], {
              relativeTo: this.route,
            });
          } else if (resData.role === 'student') {
            this.showToast('top-right', 'success', `Login Success`);
            this.router.navigate(['/student/home'], {
              relativeTo: this.route,
            });
          } else {
            this.showToast('top-right', 'success', `Login Success`);
            this.router.navigate(['/pages/home'], {
              relativeTo: this.route,
            });
          }
        }
        this.loginForm.reset();
      },
      (errorMessage: any) => {
        this.showToast('top-right', 'danger', 'Invalid User Id or Password');
      },
    );
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
