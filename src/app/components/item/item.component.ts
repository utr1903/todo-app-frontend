import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { baseUrl } from '../../../environments/environment'
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items: any = [];
  newItemContent: string = "";

  constructor(
    private _http: HttpService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.getTodoItems();
  }

  getTodoItems() {
    this._http.get(`${baseUrl}items/GetItems`).subscribe(
      data => {
        this.items = data;
      },
      err => {
        this._router.navigate(['/login']);
      });
  }

  createNewTodoItem() {
    this._http.post(`${baseUrl}items/CreateItem`, this.newItemContent).subscribe(
      data => {
        const item = {
          "listId": data,
          "content": this.newItemContent
        }
        this.items.push(item);
      },
      err => {  
        this._router.navigate(['/login']);
      });
  }

  editTodoItem(item: any) {
    this._http.post(`${baseUrl}items/UpdateItem`, item).subscribe(
      data => {
        
      },
      err => {
        this._router.navigate(['/login']);
      });
  }

  deleteTodoItem(item: any) {
    this._http.post(`${baseUrl}items/DeleteItem`, item.id).subscribe(
      data => {
        
      },
      err => {
        this._router.navigate(['/login']);
      });
  }
}
