import { Router, ActivatedRoute } from '@angular/router';
import { SmsPackService } from './../../services/smspack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-admin-sms-pack',
  templateUrl: './admin-sms-pack.component.html',
  styleUrls: ['./admin-sms-pack.component.scss'],
})
export class AdminSmsPackComponent implements OnInit {
  smsPacks: any[];
  display: boolean;

  constructor(
    private smsPackService: SmsPackService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;
    this.smsPacks = [];
    this.smsPackService.getSmsPacks().subscribe((res: any) => {
      this.smsPacks = res;
      this.display = true;
    });
  }

  editSmsPack(id: any) {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParams: { smsPack: id, edit: true },
    });
  }

  deleteSmsPack(id: any) {
    this.smsPackService.deleteSmsPack(id).subscribe(
      (res: any) => {
        const i = this.smsPacks.findIndex((smsPack) => smsPack._id === id);
        if (i !== -1) {
          this.smsPacks.splice(i, 1);
        }
      },
      (err: any) => {},
    );
  }
}
