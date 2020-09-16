import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth-services/auth.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  tnc: boolean = false;
  tncDisplay: boolean = false;

  constructor(
    public authService: AuthService,
    public router: Router,
    private toasterService: NbToastrService,
  ) {}

  openTnC() {
    this.tncDisplay = true;
  }

  closeTnC() {
    this.tncDisplay = false;
  }

  ngOnInit() {
    this.signUpForm = new FormGroup(
      {
        name: new FormControl(null, { validators: [Validators.required] }),
        email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
        phone: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
        }),
        password: new FormControl(null, { validators: [Validators.required] }),
        confirmPassword: new FormControl(null, { validators: [Validators.required] }),
        role: new FormControl('institute', { validators: [Validators.required] }),
      },
      {
        validators: this.passwordValidator.bind(this),
      },
    );
  }

  passwordValidator(group: FormGroup): { [s: string]: boolean } {
    if (group.value.password !== group.value.confirmPassword) {
      return { invalidPassword: true };
    }
    return null;
  }

  acceptTermsAndConditions(tnc: boolean) {
    this.tnc = tnc;
  }

  onSignUp() {
    this.signUpForm.markAllAsTouched();
    if (this.signUpForm.invalid) {
      this.showToast('top-right', 'danger', 'Insufficient Data, Please fill all Fields Correctly');
      return;
    } else if (!this.tnc) {
      this.showToast('top-right', 'danger', 'Accept Terms and Conditions');
      return;
    }

    const user = {
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      phone: this.signUpForm.value.phone,
      password: this.signUpForm.value.password,
      role: this.signUpForm.value.role,
    };

    this.authService.findUser(user.phone, user.email).subscribe(
      (res: any) => {
        if (res.success) {
          this.authService.signUp(user).subscribe(
            (signUpRes: any) => {
              // this.router.navigate(['/otp'], {
              //   queryParams: { phone: user.phone, email: user.email },
              // });
              this.router.navigate(['/login'], {});
            },
            (err: any) => {
              this.showToast('top-right', 'danger', 'This Email or Phone already exist');
            },
          );
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
