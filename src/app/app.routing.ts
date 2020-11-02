
import { RouterModule, Routes } from '@angular/router';

import { ClickeventComponent } from './clickevent/clickevent.component';
import { CalenderComponent } from './calender/calender.component';
import { DataShowTableComponent } from './data-show-table/data-show-table.component';
import { LoginComponent } from './login/login.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { TodoCrashCodeComponent } from './todo-crash-code/todo-crash-code.component';
import { ParentComponent } from './parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { Task6Component } from './task6/task6.component';
import { Task6regComponent } from './task6reg/task6reg.component';
import { Task6ViewBtnComponent } from './task6-view-btn/task6-view-btn.component';
import { Task6CartMenuComponent } from './task6-cart-menu/task6-cart-menu.component';

const arr: Routes =[
    { path: 'task6', component: Task6Component},
    { path: 'task6-cart-menu', component: Task6CartMenuComponent},
    { path: 'clickevent', component: ClickeventComponent },
    { path: 'calender', component: CalenderComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'data-show-table', component: DataShowTableComponent},
    { path: 'login', component: LoginComponent },
    { path: 'reg-form', component: RegFormComponent},
    { path: 'todo-crash-code', component: TodoCrashCodeComponent},
    { path: '', component: ParentComponent},
    { path: 'page-not-found', component: PageNotFoundComponent},

    { path: 'task6reg', component: Task6regComponent},
    { path: 'task6-view-btn', component: Task6ViewBtnComponent},
    { path: '**', redirectTo: 'page-not-found'},


];

export const arrRouting= RouterModule.forRoot(arr);
