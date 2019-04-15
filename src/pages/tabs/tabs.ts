import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { Slides, Tabs } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;

  constructor() {

  }
}






