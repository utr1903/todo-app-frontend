import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  lists: any = [];
  newListName : string = "";

  constructor(
    private _http: HttpService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.getTodoLists();
  }

  getTodoLists() {
    this._http.get('http://localhost:8080/lists/GetLists').subscribe(
      data => {
        this.lists = data;
      },
      err => {
        this._router.navigate(['/login']);
      });
  }

  createNewTodoList() {
    this._http.post('http://localhost:8080/lists/CreateList', this.newListName).subscribe(
      data => {
        const list = {
          "listId": data,
          "listName": this.newListName
        }
        this.lists.push(list);
      },
      err => {
        this._router.navigate(['/login']);
      });
  }
}
