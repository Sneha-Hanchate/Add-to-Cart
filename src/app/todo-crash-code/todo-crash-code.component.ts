import { Component, OnInit } from '@angular/core';
import {Todo, Employee, Product} from './todo';

@Component({
  selector: 'app-todo-crash-code',
  templateUrl: './todo-crash-code.component.html',
  styleUrls: ['./todo-crash-code.component.css']
})
export class TodoCrashCodeComponent implements OnInit {
id:number;
title: string;
status: string;
// Name:string;
// Salary: number;
// Quantity:number;
// Id:number;

arrTodos: Todo[] = [
  new Todo(1, 'heelo hi', 'done'),
  new Todo(2, 'hey hiii', 'pending'),
];

// arrEmployee: Employee[] = [
//   new Employee(1, 'heelo hi', 1000),
//   new Employee(2, 'hey hiii', 2000),
// ];
// arrProduct: Product[] = [
//   new Product(1, 'heelo hi', 4),
//   new Product(2, 'hey hiii', 67),
// ];
  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.arrTodos.push(new Todo(this.id, this.title, this.status));
  }

  delete(item: Todo): void {
    this.arrTodos.splice(this.arrTodos.indexOf(item), 1);
  }

  edit(item: Todo): void {
    if (item.status === 'done'){
      item.status = 'pending';
    } else{
      item.status = 'done';
    }
  }
  clear(){
    this.id=0;
    this.title="Enter Name";
    this.status="Enter Status";

  }

  // employee
  // eadd(): void {
  //   this.arrTodos.push(new Todo(this.Id, this.Name, this.Salary));
  // }

  // edelete(x: Todo): void {
  //   this.arrTodos.splice(this.arrTodos.indexOf(x), 1);
  // }

  // eedit(x: Todo): void {
  //   if (x.status === 'done'){
  //     x.status = 'pending';
  //   } else{
  //     x.status = 'done';
  //   }
  // }
  // for product
  // padd(): void {
  //   this.arrTodos.push(new Todo(this.Id, this.Name, this.Quantity));
  // }

  // pdelete(item: Todo): void {
  //   this.arrTodos.splice(this.arrTodos.indexOf(item), 1);
  // }

  // pedit(aa: Todo): void {
  //   if (aa.status === 'done'){
  //     aa.status = 'pending';
  //   } else{
  //     aa.status = 'done';
  //   }
  // }

}
