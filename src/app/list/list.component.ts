import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  lists: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.get('http://localhost:8080/lists/GetLists').subscribe(
      data => {
        this.lists = data;
        console.log(this.lists);
      },
      err => {
        console.error('There was an error!', err);
      });
  }
}
