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

  signUp() {
    const dto = {
      "userName": this.userName,
      "password": this.password,
    };

    this._http.post('http://localhost:8080/users/CreateUser', dto).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['/']);
      },
      err => {
        console.error('There was an error!', err);
        this._router.navigate(['/']);
      });
  }

  signIn() {

  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    }

    return myClasses;
  }
}
