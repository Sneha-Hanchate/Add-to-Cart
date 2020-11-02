import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  a: number= 0;
  b: number= 0;
  sum: number= 0;
  no1: number =10;
  str: string= "sneha hanchate";
  flag: boolean= true;
  constructor() { }

  ngOnInit(): void {}

  onButtonClick(){
    alert('hello guys u clicked on button');
  }
  onKeyUp(){
    alert('hello u clicked one key');
  }
  add(){
    this.sum= this.a + this.b;
  }

}
