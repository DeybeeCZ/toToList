import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { AddTaskComponent } from './common/addTask/addtask.component'
import { ListTaskComponent } from './common/listTask/listtask.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AddTaskComponent, ListTaskComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
