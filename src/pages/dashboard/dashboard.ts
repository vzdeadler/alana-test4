import { ProfileProvider } from './../../providers/profile/profile';
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
  vacantData: any;
  showVacants: boolean;

  constructor(
    public navCtrl: NavController,
    public loginProvider: LoginProvider,
    public dashboardProvider: DashboardProvider,
    public profileProvider: ProfileProvider
  ) {
    this.headerTitle = 'Dashboard';
    this.showVacants = true;
  }

  ionViewDidLoad() {
    let jwt = this.loginProvider.getToken();
    this.dashboardProvider.getVacants(jwt)
      .subscribe(data => {
        console.log(data.response);
        this.vacantsData = data.response;
        this.parseVacantData();
        console.log('asd');
        this.profileProvider.getCandidate(jwt);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  parseVacantData(): void {
    for(let key in this.vacantsData){
      if(this.vacantsData[key].minDistance < 1)
        this.vacantsData[key].showDistance = '-1';
      else
        this.vacantsData[key].showDistance = '+' + Math.floor(this.vacantsData[key].minDistance);
    };
  };

  openVacant(_id): void {
    let data = {
      id: _id,
      jwt: this.loginProvider.getToken()
    };
    this.dashboardProvider.getVacant(data)
      .subscribe(data => {
        console.log(data);
        this.vacantData = data.response;
        this.showVacants = false;
        this.headerTitle = 'Vacantes';
      },
      (err) => {
        console.log(err);
      }
    );
  };

  backController(): void {
    this.showVacants = true;
    this.vacantData = undefined;
    this.headerTitle = 'Dashboard';
  };
}
