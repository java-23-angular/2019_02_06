import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import {MylistService} from './mylist.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
