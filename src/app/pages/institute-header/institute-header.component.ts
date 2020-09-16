import { InstituteService } from './../../services/institute.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-institute-header',
  templateUrl: './institute-header.component.html',
  styleUrls: ['./institute-header.component.scss'],
})
export class InstituteHeaderComponent implements OnInit {
  instituteHeaderDetails: any;

  constructor(private instituteService: InstituteService) {}

  ngOnInit() {
    this.instituteHeaderDetails = this.instituteService.getInstituteHeaderDetails();
  }
}
