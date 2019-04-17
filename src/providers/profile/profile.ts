import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  url: string;
  profileData: any;

  constructor(public http: HttpClient) {
    this.url = 'https://apidev.alanajobs.com';
  }

  getCandidate(jwt): void {
    let _headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    });

    this.http.get(
      this.url + '/secure-candidate/candidate/show', 
      { 
        headers: _headers
      })
      .subscribe( data => {
        this.profileData = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  getProfile(): any {
    return this.profileData;
  };

  setProfile() {

  }

}
