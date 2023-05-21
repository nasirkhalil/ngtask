import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  public localBaseUrl = 'http://localhost/'
  public baseUrl = 'server url here';
}
