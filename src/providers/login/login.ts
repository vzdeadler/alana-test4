import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginProvider {

  url: string;
  private jwt: string;

  constructor(public http: HttpClient) {
    this.url = 'https://apidev.alanajobs.com';
  }

  setToken(_jwt): void {
    this.jwt = _jwt;
  }

  getToken(): any {
    return this.jwt;
  }

  login(data): any {
    let body = `email=${data.email}&password=${data.password}`;
    let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    return this.http.post( 
      this.url + '/secure-candidate/login_check',
      body,
      { headers }
    );
  };
}
