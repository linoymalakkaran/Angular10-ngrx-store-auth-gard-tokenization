
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';


@Component({
  selector: 'atlp-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService) {
  }

  ngOnInit() {
    this.analytics.trackPageViews();
    let spinnerElm = document.getElementById('nb-global-spinner');
    spinnerElm.style.display = "none";
  }
}
