import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import {Product} from './product';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class ParentComponent implements OnInit {

  name: string;
  price:number;
arr:string;
  selectCategory: string="watch";

  arrProduct: Product[] = [
    new Product('xyz', 4),
    new Product('abc', 67),

  ];

  @Output() myEvent1 = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  add(name:string, price:number):void {
    console.log(name , price,'vjhbhkklj.ljln');
    this.arrProduct.push(new Product(name, price));
  }
  onMyEvent(val:string){
    console.log(val, "parent");
    this.arrProduct = this.arrProduct.filter((x)=> x.name.startsWith(val));

  }


  addCartClick(arrProduct){
    console.log(arrProduct.price, arrProduct.name,"working add to cart click function");
    this.myEvent1.emit(arrProduct);


  }

}
