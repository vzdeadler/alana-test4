import { LoginProvider } from './../../providers/login/login';
import { TabsPage } from './../tabs/tabs';
import { DashboardPage } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  passwordType: string;

  userData = {
    email: '',
    password: ''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loginProvider: LoginProvider
  ) {
    this.passwordType = 'password';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  togglePassword(): void {
    this.passwordType == 'password' ? this.passwordType = 'text' : this.passwordType = 'password';
  };

  loginBtn(): void {
    //this.navCtrl.push(TabsPage);
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.userData.email)
      && this.userData.password.length >= 8
    ){
      this.loginProvider.login(this.userData)
        .subscribe(data => {
          this.loginProvider.setToken(data.token);
          console.log(this.loginProvider.getToken());
          this.navCtrl.push(TabsPage);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

}
