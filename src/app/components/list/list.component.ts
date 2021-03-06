import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { baseUrl } from '../../../environments/environment'
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dto: any;
  newListName : string = "";

  constructor(
    private _http: HttpService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.getTodoLists();
  }

  getTodoLists() {
    this._http.get(`${baseUrl}lists/GetLists`).subscribe(
      data => {
        this.dto = data;
      },
      err => {
        this._router.navigate(['/login']);
      });
  }

  createNewTodoList() {
    this._http.post(`${baseUrl}lists/CreateList`, this.newListName).subscribe(
      data => {
        const list = {
          "listId": data,
          "listName": this.newListName
        }
        this.dto.model.push(list);
      },
      err => {  
        this._router.navigate(['/login']);
      });
  }

  navigateToItems(list: any) {
    this._router.navigate([`/item/${list.listId}`]);
  }

  editTodoList(list: any) {
    this._http.post(`${baseUrl}lists/UpdateList`, list).subscribe(
      data => {
        
      },
      err => {
        this._router.navigate(['/login']);
      });
  }

  deleteTodoList(list: any) {
    this._http.post(`${baseUrl}lists/DeleteList`, list.id).subscribe(
      data => {
        
      },
      err => {
        this._router.navigate(['/login']);
      });
  }
}
