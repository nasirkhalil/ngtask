import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(toekn:string) {
    localStorage.setItem('user-token', toekn);
  }

  getToken() {
    return localStorage.getItem('user-token');
  }
  
  setNavBars(navs:any) {
    localStorage.setItem('nav-bar', navs.toString());    
  }

  getNavBar() {
    return localStorage.getItem('nav-bar');
  }

  setCustomerInfo(info:any) {
    localStorage.setItem('user-info', info);
  }

  getUserInfo() {
    return localStorage.getItem('user-info');
  }
}
