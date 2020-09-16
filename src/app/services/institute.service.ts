import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstituteService {
  institutes: any[] = [];

  institute: any;

  private selectedInstituteObservable = new Subject<string>();
  selectedInstitute = this.selectedInstituteObservable.asObservable();

  private instituteHeaderDetails: any;

  constructor() {}

  setInstituteHeaderDetails(instituteHeaderDetails: any) {
    this.instituteHeaderDetails = instituteHeaderDetails;
  }
  getInstituteHeaderDetails() {
    return this.instituteHeaderDetails;
  }

  setInstitute(institute: any) {
    this.institute = institute;
  }

  getInstitute() {
    return this.institute;
  }

  setInstitutes(institutes: any[]) {
    this.institutes = institutes;
  }

  getInstitutes() {
    return this.institutes;
  }

  publishData(data: any) {
    this.selectedInstituteObservable.next(data);
  }
}
