import { Component, OnInit } from '@angular/core';
import {Todo, Employee, Product} from './data';
@Component({
  selector: 'app-data-show-table',
  templateUrl: './data-show-table.component.html',
  styleUrls: ['./data-show-table.component.css']
})
export class DataShowTableComponent implements OnInit {
//arrName: string[] = ['sneha', 'shruti', 'onkar'];
  //arrNumber: number[] = [1, 2, 3, 4];
  arrTodos: Todo[] = [
    new Todo(1, 'heelo hi', 'done'),
    new Todo(2, 'hey hiii', 'pending'),
  ];
  arrEmployee: Employee[] = [
    new Employee(1, 'heelo hi', 1000),
    new Employee(2, 'hey hiii', 2000),
  ];
  arrProduct: Product[] = [
    new Product(1, 'heelo hi', 4, 2343),
    new Product(2, 'hey hiii', 67, 5456),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
