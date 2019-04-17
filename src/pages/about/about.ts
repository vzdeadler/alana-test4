import { LoginProvider } from './../../providers/login/login';
import { ProfileProvider } from './../../providers/profile/profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  profileData: any;

  constructor(
    private navCtrl: NavController,
    private loginProvider: LoginProvider,
    private profileProvider: ProfileProvider
  ) {
    this.profileData = {
      profilePicture: '',
      address: {
        location: {
          name: ''
        }
      },
      countryCode: {
        code: ''
      }
    };
  }

  ionViewDidLoad() {
    this.getProfile();
  }

  getProfile(): any {
    // let jwt = this.loginProvider.getToken();
    // this.profileProvider.getCandidate(jwt);
    let data = this.profileProvider.getProfile();
    this.profileData = data.response;
    console.log(this.profileData);
    this.profileData.hired ? this.profileData.hiredIcon = 'checkmark' : this.profileData.hiredIcon = 'close';
  }

}
