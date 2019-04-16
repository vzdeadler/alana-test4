import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DashboardProvider {

  url: string;

  constructor(public http: HttpClient) {
    this.url = 'https://apidev.alanajobs.com';
  }

  getVacants(jwt): any {
    let _headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    });
    let _params = new HttpParams()
      .set('offset', '0')
      .set('limit', '10')
      .set('apply', '0');
    return this.http.get(
      this.url + '/secure-candidate/publication/company-index', 
      { 
        headers: _headers,
        params: _params
      });
  };

}
