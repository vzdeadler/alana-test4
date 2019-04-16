import { LoginProvider } from './../../providers/login/login';
import { DashboardProvider } from './../../providers/dashboard/dashboard';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  headerTitle: string;
  vacantsData: any;

  constructor(
    public navCtrl: NavController,
    public loginProvider: LoginProvider,
    public dashboardProvider: DashboardProvider
  ) {
    this.headerTitle = 'Dashboard';
  }

  ionViewDidLoad() {
    let jwt = this.loginProvider.getToken();
    this.dashboardProvider.getVacants(jwt)
      .subscribe(data => {
        console.log(data.response);
        this.vacantsData = data.response;
        this.parseVacantData();
      },
      (err) => {
        console.log(err);
      })

    
  }

  parseVacantData(): void {
    for(let key in this.vacantsData){
      if(this.vacantsData[key].minDistance < 1)
        this.vacantsData[key].showDistance = '-1';
      else
        this.vacantsData[key].showDistance = '+' + Math.floor(this.vacantsData[key].minDistance);
    };
  };

  backController(): void {
    // if(this.slideStep > 1){
    //   this.formSlider.lockSwipes(false);
    //   this.formSlider.slidePrev(500);
    //   this.formSlider.lockSwipes(true);
    //   this.slideStep -= 1;
    // }else{
    //   this.navCtrl.pop();
    // }
  };
}
