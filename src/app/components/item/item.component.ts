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

  dto: any;
  listId: string | null = "";
  newItemContent: string = "";

  constructor(
    private _http: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.listId = this._route.snapshot.paramMap.get('listId');
    if (this.listId) {
      this.getTodoItems(this.listId);
    }
  }

  getTodoItems(listId: string) {
    this._http.post(`${baseUrl}items/GetItems`, listId).subscribe(
      data => {
        this.dto = data;
      },
      err => {
        this._router.navigate(['/login']);
      });
  }

  createNewTodoItem() {
    const item = {
      "listId": this.listId,
      "content": this.newItemContent
    }

    this._http.post(`${baseUrl}items/CreateItem`, item).subscribe(
      data => {
        this.dto.model.push(item);
      },
      err => {
        this._router.navigate(['/login']);
      });
  }

  editTodoItem(item: any) {
    this._http.post(`${baseUrl}items/UpdateItem`, item).subscribe(
      data => {
        location.reload();
      },
      err => {
        this._router.navigate(['/login']);
      });
  }

  deleteTodoItem(itemId: string) {
      this._http.post(`${baseUrl}items/DeleteItem`, itemId).subscribe(
        data => {
          location.reload();
        },
        err => {
          this._router.navigate(['/login']);
        });
  }
}
