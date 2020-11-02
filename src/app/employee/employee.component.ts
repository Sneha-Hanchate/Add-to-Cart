import { Component, OnInit } from '@angular/core';
import {Emp} from './emp';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onEmpAdd(f){
    console.log('Hello Employee');
    console.log(f);
  }

}
