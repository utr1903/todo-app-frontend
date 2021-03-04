import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    const headerDict = {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer '
    }

    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    // return this.http.get(url);
    return this.http.get(url, requestOptions);
  }

  post(url: string, body: any) {
    return this.http.post(url, body);
  }
}
