import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() categoryName:string=' ';

  @Output() myEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  onSearchClick(val:string){
    console.log(val,"it is from child component");
    this.myEvent.emit(val);
  }

}
