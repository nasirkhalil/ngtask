import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { ConfigurationService } from '../share/configuration.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = this._config.baseUrl;
  constructor(
    private http: HttpClient,
    private _config: ConfigurationService,
    private token: TokenService
  ) { }

  sendGetRequest(url:any, action = false) {
    var header:any = {
      Headers: new HttpHeaders().set('Authorization', `Bearer ${this.token.getToken()}`)
    }
    if(action) {
      return this.http.get(url);
    }else {
      return this.http.get(this.baseUrl+url, header);
    }
  }

  sendPostRequest(url:any, data:any) {
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token.getToken()}`)
    }
    return this.http.post(this.baseUrl+url, data, header);
  }
}
