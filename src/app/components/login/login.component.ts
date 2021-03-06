import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http/http.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  username: string = ""
  password: string = ""

  constructor(
    private _http: HttpService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    if (this.formGroup?.valid) {
      this._authService.login(this.formGroup.value).subscribe(result => {
        if (result.token) {
          localStorage.setItem("token", result.token);
          this._router.navigate(['/list']);
        }
        else {
          alert("Login unsuccessful");
        }
      });
    }
  }
}
