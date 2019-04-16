import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { DashboardPage } from '../dashboard/dashboard';
import { Slides, Tabs } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = AboutPage;

  constructor() {

  }
}






