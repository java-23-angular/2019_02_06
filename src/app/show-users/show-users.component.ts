import { Component, OnInit } from '@angular/core';
import {UserModel} from '../user.model';
import {MylistService} from '../mylist.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent {
  users: UserModel[] = [];
  constructor(private service: MylistService){

  }

  load() {
    this.users = [];
    for (let i = 0; i < this.service.size(); i++){
      this.users.push(this.service.get(i));
    }
  }
}
