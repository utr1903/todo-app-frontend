import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
    private _router: Router,
    private _route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const listId = this._route.snapshot.paramMap.get('listId');
    if (listId) {
      this.getTodoItems(listId);
    }
  }

  getTodoItems(listId: string) {
    this._http.post(`${baseUrl}items/GetItems`, listId).subscribe(
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
