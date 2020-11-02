import { Component, OnInit } from '@angular/core';
import {Cart} from './cart';
import {Product} from 'src/app/parent/product';

@Component({
  selector: 'app-task6-cart-menu',
  templateUrl: './task6-cart-menu.component.html',
  styleUrls: ['./task6-cart-menu.component.css']
})
export class Task6CartMenuComponent implements OnInit {

  name:string;
  price:number;
  Total:number=0;
  cP:number=0;
  TotalP:number=0;
  arrCart :Cart[]=[
  ];
  constructor() { }

  ngOnInit(): void {
  }



  onMyEvent1(Cart:Product){
    console.log(Cart.name, Cart.price,"cart function" );
    this.cP=Cart.price;
    this.Total=this.Total + this.cP;
    this.TotalP=this.TotalP + 1;

    this.arrCart.push(new Product(Cart.name, Cart.price));


  }

  delete(x: Cart): void {
    this.Total=this.Total - x.price;
    this.TotalP =this.TotalP - 1;
    this.arrCart.splice(this.arrCart.indexOf(x), 1);
  }
  // deleteall(arrCart): void {
  //   for (let i=0; i< arrCart.length; i++){
  //     this.arrCart.splice(this.arrCart.indexOf(arrCart));
  //   }

  // }
  // onMyEvent1(){
  //   console.log("cart function" );

    // this.arrCart.push(new Product(Cart.name, Cart.price));

  // }
}
