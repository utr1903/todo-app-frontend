import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { baseUrl } from "./../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cachedRequests: Array<HttpRequest<any>> = [];

  constructor(private _http: HttpClient) { }

  login(data: any): Observable<any>{
    return this._http.post(`${baseUrl}users/SignIn`, data);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  collectFailedRequest(request: HttpRequest<any>): void {
    this.cachedRequests.push(request);
  }
  
  retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
}
