import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { SocketioService } from '../../../../services/chat.service';

@Component({
  selector: 'ngx-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  eduAtlasEmployeeForm: FormGroup;
  instituteId: string;
  institute: any;
  edit: string;
  // OTP Form
  otpForm: FormGroup;
  phone: string;
  // OTP Sent
  otpSent: boolean;
  dataFetched: boolean = false;

  employeeEduId: string;
  employee: any;
  alreadyRegistered: boolean;

  roles = ['Teacher', 'Manager', 'Counselor'];

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private active: ActivatedRoute,
    private toasterService: NbToastrService,
    private chatService: SocketioService,
  ) {}

  ngOnInit() {
    this.alreadyRegistered = false;

    this.instituteId = this.active.snapshot.paramMap.get('id');

    this.active.queryParams.subscribe((data) => {
      this.employeeEduId = data.eduAtlasId;
      const employeeObjId = data.employeeObjId;
      this.edit = data.edit;

      this.employeeForm = this.fb.group({
        name: ['', Validators.required],
        employeeEmail: ['', Validators.compose([Validators.required, Validators.email])],
        contact: ['', Validators.required],
        address: [''],
        role: ['', Validators.required],
      });

      // Construct Eduatlas Id Form
      this.eduAtlasEmployeeForm = this.fb.group({
        eduAtlasId: ['', Validators.required],
      });

      // Construct OTP Form
      this.otpForm = this.fb.group({
        otp: ['', Validators.required],
      });

      if (this.edit === 'true') {
        this.alreadyRegistered = true;
        this.getOneEmployeeByInstitute(employeeObjId, this.instituteId);
      }
    });
  }

  get f() {
    return this.employeeForm.controls;
  }

  get eduAtlasEmployeeFormControl() {
    return this.eduAtlasEmployeeForm.controls;
  }

  onEmployeeFormSearch() {
    if (this.eduAtlasEmployeeForm.valid) {
      const employeeEduId = `${this.eduAtlasEmployeeFormControl['eduAtlasId'].value}`;
      this.api.sendOtpForGetUserDetails(employeeEduId, 'employee').subscribe(
        (res: any) => {
          if (res) {
            this.otpSent = true;
            this.phone = res.phone;
            this.showToaster('top-right', 'success', res.message);
          } else {
            this.showToaster('top-right', 'danger', 'Invalid Eduatlas ID');
          }
        },
        (err: any) => {
          this.showToaster('top-right', 'danger', 'Invalid Eduatlas ID');
        },
      );
    }
  }

  verifyOtp() {
    if (this.otpSent && this.otpForm.valid) {
      const verificationData = {
        verifyType: 'verifyUser',
        otp: this.otpForm.value.otp,
        phone: this.phone,
      };
      this.api.verifyUserOtp(verificationData).subscribe(
        (data) => {
          this.showToaster('top-right', 'success', 'OTP Verified');
          this.getOneEmployee(this.eduAtlasEmployeeForm.value.eduAtlasId);
        },
        (error) => {
          this.showToaster('top-right', 'danger', 'Invalid OTP');
        },
      );
    }
  }

  getOneEmployee(eduId: any) {
    this.api.getOneEmployee(eduId).subscribe(
      (data: any) => {
        if (data) {
          this.employee = data;
          this.employeeForm.reset();

          this.employeeForm.patchValue({
            name: this.employee.basicDetails.name,
            employeeEmail: this.employee.basicDetails.employeeEmail,
            contact: this.employee.basicDetails.employeeContact,
            address: this.employee.basicDetails.employeeAddress,
          });
          this.employeeEduId = this.employee.eduAtlasId;
          this.eduAtlasEmployeeForm.get('eduAtlasId').disable();

          this.employeeForm.patchValue({
            name: this.employee.basicDetails.name,
            employeeEmail: this.employee.basicDetails.employeeEmail,
            contact: this.employee.basicDetails.employeeContact,
            address: this.employee.basicDetails.employeeAddress,
          });

          this.employeeForm.get('name').disable();
          this.employeeForm.get('employeeEmail').disable();
          this.employeeForm.get('address').disable();
          this.employeeForm.get('contact').disable();
          this.otpSent = false;
          this.phone = null;
          this.dataFetched = true;
        } else {
          this.showToaster('top-right', 'danger', 'Invalid Eduatlas ID');
        }
      },
      (error: any) => {
        this.showToaster('top-right', 'danger', 'Invalid Employee EduAtlas ID');
      },
    );
  }

  changeAlreadyRegistered(e: any) {
    this.alreadyRegistered = e;
    if (!e) {
      this.eduAtlasEmployeeForm.reset();
      this.employeeEduId = null;
      this.employee = null;
    }
  }

  getOneEmployeeByInstitute(employeeObjId: string, institute: string) {
    this.api
      .getOneEmployeeByInstitute({
        empId: employeeObjId,
        instituteId: institute,
      })
      .subscribe((data: any) => {
        this.employee = data[0];

        const eduAtlId = this.employeeEduId;

        this.eduAtlasEmployeeForm.patchValue({
          eduAtlasId: eduAtlId,
        });

        this.eduAtlasEmployeeForm.get('eduAtlasId').disable();

        this.employeeForm.patchValue({
          name: this.employee.basicDetails.name,
          employeeEmail: this.employee.basicDetails.employeeEmail,
          contact: this.employee.basicDetails.employeeContact,
          address: this.employee.basicDetails.employeeAddress,
          role: this.employee.instituteDetails.role,
        });

        this.employeeForm.get('name').disable();
        this.employeeForm.get('address').disable();
        this.employeeForm.get('employeeEmail').disable();
        this.employeeForm.get('contact').disable();
      });
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      return;
    }

    if (this.edit === 'true') {
      this.api
        .updateEmployeeInstituteDetails(this.employee._id, this.instituteId, this.f['role'].value)
        .subscribe(
          (res) => {
            this.showToaster('top-right', 'success', 'Employee Updated Successfully!');
            this.router.navigate([
              `/pages/institute/branch-config/manage-employee/${this.instituteId}`,
            ]);
          },
          (err) => this.showToaster('top-right', 'danger', err.error.message),
        );
    }

    if (!this.edit) {
      if (!this.alreadyRegistered) {
        this.api.addEmployee(this.employeeForm.value, this.instituteId).subscribe(
          (data) => {
            this.chatService.getChatMembers();
            this.showToaster('top-right', 'success', 'New Employee Added Successfully!');
            setTimeout(() => {
              this.router.navigate([
                `/pages/institute/branch-config/manage-employee/${this.instituteId}`,
              ]);
            }, 1000);
          },
          (err) => {
            if (err.error.message.includes('E11000 duplicate key error collection')) {
              this.showToaster(
                'top-right',
                'danger',
                'This Employee Already Exist, Please Search Employee By EDU-Atlas ID',
              );
              this.alreadyRegistered = true;
              return;
            }
            this.alreadyRegistered = true;
            this.showToaster('top-right', 'danger', err.error.message);
          },
        );
      } else {
        if (this.employeeEduId) {
          this.api
            .addEmployeeInstitute(this.employeeEduId, this.instituteId, this.employeeForm.value)
            .subscribe(
              (res) => {
                this.showToaster(
                  'top-right',
                  'success',
                  'Employee Added to Institute Successfully!',
                );
                this.router.navigate([
                  `/pages/institute/branch-config/manage-employee/${this.instituteId}`,
                ]);
              },
              (err) => this.showToaster('top-right', 'danger', err.error.message),
            );
        } else {
          this.showToaster('top-right', 'danger', 'Invalid Eduatlas ID');
        }
      }
    }
  }

  showToaster(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
