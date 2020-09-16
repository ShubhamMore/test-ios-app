import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MENU_ITEMS } from '../../../pages-menu';
import { AuthService } from '../../../../services/auth-services/auth.service';
import { InstituteService } from '../../../../services/institute.service';
import { MenuService } from '../../../../services/menu.service';

@Component({
  selector: 'ngx-manage-institute',
  templateUrl: './manage-institute.component.html',
  styleUrls: ['./manage-institute.component.scss'],
})
export class ManageInstituteComponent implements OnInit {
  confirmDelete: boolean;
  showAddInstituteBtn: boolean;
  institutes: any[];

  instituteUser: any;
  displayData: boolean;

  constructor(
    private api: ApiService,
    private router: Router,
    private toastrService: NbToastrService,
    private authService: AuthService,
    private instituteService: InstituteService,
    private menuService: MenuService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.institutes = [];
    this.getInstitutes();
    if (this.authService.getUser() && this.authService.getUser() === 'institute') {
      this.showAddInstituteBtn = true;
    }
  }

  getInstitutes() {
    const user = this.authService.getUser();
    if (user && user.role === 'institute') {
      this.api.getInstitutes().subscribe((institutes: any) => {
        this.institutes = institutes;
        if (institutes.length > 0) {
          MENU_ITEMS[2].hidden = true;
          MENU_ITEMS[3].hidden = true;
          MENU_ITEMS[4].hidden = true;
          this.menuService.setMenuSeqList();
        }
      });
    }
  }

  getInstitute(id: string, active: boolean) {
    if (active) {
      this.instituteService.publishData(id);
      this.router.navigate(['/pages/dashboard', id]);
    } else {
      this.router.navigate(['/pages/membership'], {
        relativeTo: this.route,
        queryParams: { type: 'renew', id: id },
      });
    }
  }

  updateInstitute(id: string) {
    this.router.navigate(['/pages/institute/add-institute'], {
      queryParams: { instituteId: id, edit: 'true' },
    });
  }

  delete(id: string) {
    const confirm = window.confirm('Are u sure, You want to delete this Institute/Branch?');
    if (confirm) {
      this.api.deleteInstitute(id).subscribe(
        (res) => {
          const i = this.institutes.findIndex((inst) => inst._id === id);
          if (i !== -1) {
            this.institutes.splice(i, 1);
            this.showToast('top-right', 'success', 'Institute Successfully deleted.');
          }
          if (this.institutes.length < 2) {
            MENU_ITEMS[2].hidden = true;
            MENU_ITEMS[3].hidden = true;
            MENU_ITEMS[4].hidden = true;
            this.menuService.setMenuSeqList();
          }
        },
        (err) => {
          this.showToast('top-right', 'danger', 'Institute deletion Failed.');
        },
      );
    }
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }

  onClick() {
    this.router.navigate(['/pages/membership']);
  }
}
