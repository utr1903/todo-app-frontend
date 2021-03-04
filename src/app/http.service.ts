import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  headers = new HttpHeaders()
    .set("Access-Control-Allow-Origin", "*");

  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

  get(url: string) {
    const headerDict = {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer '
    }

    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    console.log(requestOptions);

    // return this.http.get(url);
    return this.http.get(url, requestOptions);
  }

  post(url: string, body: any) {
    return this.http.post(url, body);
  }
}
