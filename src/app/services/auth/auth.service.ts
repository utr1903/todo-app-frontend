import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { baseUrl } from "./../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(data: any): Observable<any>{
    return this._http.post(`${baseUrl}users/SignIn`, data);
  }
}
