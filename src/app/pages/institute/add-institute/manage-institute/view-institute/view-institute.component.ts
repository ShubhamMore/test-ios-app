import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../../services/api.service';
import { MENU_ITEMS } from '../../../../pages-menu';
import { MenuService } from '../../../../../services/menu.service';
@Component({
  selector: 'ngx-view-institute',
  templateUrl: './view-institute.component.html',
  styleUrls: ['./view-institute.component.scss'],
})
export class ViewInstituteComponent implements OnInit {
  institute: any;
  user: any;
  instituteId: string;

  constructor(
    private api: ApiService,
    private router: ActivatedRoute,
    private menuService: MenuService,
  ) {}

  ngOnInit() {
    this.instituteId = this.router.snapshot.paramMap.get('id');

    this.getInstitute(this.instituteId);

    MENU_ITEMS[2].hidden = false;
    MENU_ITEMS[3].hidden = false;
    MENU_ITEMS[4].hidden = false;
    this.menuService.setMenuSeqList();
  }

  getInstitute(id: string) {
    this.api.getInstitute(id).subscribe((data) => {
      this.institute = JSON.parse(JSON.stringify(data));

      MENU_ITEMS[3].children[0].link = '/pages/institute/add-students/' + id;
      MENU_ITEMS[2].link = '/pages/dashboard/' + id;
    });
  }
}
