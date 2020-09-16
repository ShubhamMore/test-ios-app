import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../../../services/institute.service';

@Component({
  selector: 'ngx-student-institute-header',
  templateUrl: './student-institute-header.component.html',
  styleUrls: ['./student-institute-header.component.scss'],
})
export class StudentInstituteHeaderComponent implements OnInit {
  instituteDetails: any;
  constructor(private instituteService: InstituteService) {}

  ngOnInit() {
    this.instituteDetails = this.instituteService.getInstituteHeaderDetails();
  }
}
