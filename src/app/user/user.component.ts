import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userName: string = "";
  password: string = "";
  passwordNew: string = "";

  navigationPage: string = "/";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges() {
    
    if (this.password != this.passwordNew) {
      console.log("Passwords don't match");
      return;
    }

    const dto = {
      "userName": this.userName,
      "password": this.password
    };

    console.log(dto);

    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
