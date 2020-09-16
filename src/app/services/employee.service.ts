import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employee: any;

  constructor() {}

  setEmployee(employee: any) {
    this.employee = employee;
  }

  getEmployee() {
    return this.employee;
  }
}
