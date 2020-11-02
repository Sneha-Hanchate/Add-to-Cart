import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from "@angular/forms";
import {arrRouting } from "./app.routing";

import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';


import { ClickeventComponent } from './clickevent/clickevent.component';
import { DataShowTableComponent } from './data-show-table/data-show-table.component';
import { CalenderComponent } from './calender/calender.component';
import { TodoCrashCodeComponent } from './todo-crash-code/todo-crash-code.component';
import { LoginComponent } from './login/login.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { Task6Component } from './task6/task6.component';
import { Task6regComponent } from './task6reg/task6reg.component';
import { Task6ViewBtnComponent } from './task6-view-btn/task6-view-btn.component';
import { Task6CartMenuComponent } from './task6-cart-menu/task6-cart-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,


    ClickeventComponent,
    DataShowTableComponent,
    CalenderComponent,
    TodoCrashCodeComponent,
    LoginComponent,
    RegFormComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    PageNotFoundComponent,
    EmployeeComponent,
    Task6Component,
    Task6regComponent,
    Task6ViewBtnComponent,
    Task6CartMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    arrRouting,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
