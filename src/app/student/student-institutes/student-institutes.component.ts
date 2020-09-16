import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth-services/auth.service';
import { StudentService } from './../../services/student.service';
import { InstituteService } from './../../services/institute.service';
import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../student-menu';

@Component({
  selector: 'ngx-student-institutes',
  templateUrl: './student-institutes.component.html',
  styleUrls: ['./student-institutes.component.scss'],
})
export class StudentInstitutesComponent implements OnInit {
  user: any;
  display: boolean;
  institutes: any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private authService: AuthService,
    private instituteService: InstituteService,
  ) {}
  ngOnInit() {
    this.display = false;
    this.instituteService.publishData('');
    this.hideOtherMenus();
    this.user = this.authService.getUser();
    this.studentService.getInstitutesOfStudent(this.user._id).subscribe((inst: any) => {
      this.instituteService.setInstitutes(inst);
      this.institutes = inst;
      this.display = true;
    });
  }
  hideOtherMenus() {
    MENU_ITEMS[2].hidden = true;
    MENU_ITEMS[3].hidden = true;
    MENU_ITEMS[4].hidden = true;
    MENU_ITEMS[5].hidden = true;
    MENU_ITEMS[6].hidden = true;
    MENU_ITEMS[7].hidden = true;
    MENU_ITEMS[8].hidden = true;
    MENU_ITEMS[9].hidden = true;
    MENU_ITEMS[10].hidden = true;
    MENU_ITEMS[11].hidden = true;
    MENU_ITEMS[12].hidden = true;
    MENU_ITEMS[13].hidden = true;
  }

  viewInstitute(id: string) {
    this.instituteService.publishData(id);
    const institute = this.institutes.find((inst: any) => inst._id === id);
    this.studentService.setInstitute(institute);
    this.router.navigate(['/student/dashboard', id], { relativeTo: this.route });
  }
}
