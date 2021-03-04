import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: any;
  users: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
    });

    this._http.get('http://localhost:8080/users/get').subscribe(
      data => {
        this.users = data;
        console.log(this.users);
      },
      err => {
        console.error('There was an error!', err);
      });
  }
}
