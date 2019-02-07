import { Component, OnInit } from '@angular/core';
import {MylistService} from '../mylist.service';
import {UserModel} from '../user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent{

  constructor(private service: MylistService){

  }
  addUser(inputName: string, inputEmail: string) {
    this.service.add(new UserModel(inputName,inputEmail));
  }
}
