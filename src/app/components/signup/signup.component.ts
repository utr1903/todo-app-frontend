import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userName: string = "";
  password: string = "";
  passwordAgain: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {

    if (this.password != this.passwordAgain) {
      console.log("Passwords don't match");
      return;
    }

    const dto = {
      "userName": this.userName,
      "password": this.password
    };

    console.log(dto);

    this.router.navigate(['/list']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
