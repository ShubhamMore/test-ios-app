import { Router, ActivatedRoute } from '@angular/router';
import { UserData, AuthService } from './services/auth-services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'ngx-app',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(
    private analytics: AnalyticsService,
    private authService: AuthService,
    private seoService: SeoService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }
    this.authService.autoLogin().subscribe(
      (resData) => {
        this.authService.loadUser(userData);
      },
      (errorMessage) => {
        this.router.navigate(['/login'], { relativeTo: this.route });
      },
    );
  }
}
