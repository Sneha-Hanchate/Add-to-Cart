import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  a: number= 0;
  b: number= 0;
  sum: number= 0;
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.sum= this.a + this.b;
  }
  sub(){
    this.sum= this.a - this.b;
  }
  mul(){
    this.sum= this.a * this.b;
  }
  div(){
    this.sum= this.a / this.b;
  }
  clr(){
    this.sum=0;
     this.a=0;
       this.b=0;
  }


}
