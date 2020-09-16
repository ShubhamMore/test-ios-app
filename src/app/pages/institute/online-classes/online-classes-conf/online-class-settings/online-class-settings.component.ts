import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../../../services/auth-services/auth.service';

@Component({
  selector: 'ngx-online-class-settings',
  templateUrl: './online-class-settings.component.html',
  styleUrls: ['./online-class-settings.component.scss'],
})
export class OnlineClassSettingsComponent implements OnInit {
  instituteId: string;
  edit: string;
  settingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
    private authService: AuthService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe((param) => {
      this.edit = param.edit;
    });

    this.api.getCredentials().subscribe((res: any) => {
      if (res && res.client_id) {
        this.edit = 'true';
        this.settingForm.patchValue({
          publicKey: res.client_id,
          secretKey: res.client_secret_id,
        });
      }
    });

    this.settingForm = this.fb.group({
      publicKey: ['', Validators.required],
      secretKey: ['', Validators.required],
    });
  }

  onSubmit() {
    this.settingForm.markAllAsTouched();

    const userId = this.authService.getUser()._id;
    const requestData = {
      client_id: this.settingForm.get('publicKey').value,
      client_secret_id: this.settingForm.get('secretKey').value,
      user_id: userId,
    };
    this.api.addCredentials(requestData).subscribe(
      (res: any) => {
        this.showToast('top-right', 'success', 'Settings Updated');
        this.api.getZoomAuth({ userId: res.user_id }).subscribe((data: any) => {
          window.open(
            data.authLink,
            '_system',
            'toolbar,scrollbars,resizable,top=500,left=500,width=400,height=400',
          );
        });
        this.router.navigate(['/pages/institute/online-classes/create-class/', this.instituteId]);
      },
      (error) => console.error(error),
    );
  }
  get f() {
    return this.settingForm.controls;
  }
  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
