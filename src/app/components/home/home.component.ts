import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = " "

  userName: string = ""
  password: string = ""

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToSignUp() {
    this._router.navigate(['/']);
  }

  navigateToLogin() {
    this._router.navigate(['/login']);
  }
}
