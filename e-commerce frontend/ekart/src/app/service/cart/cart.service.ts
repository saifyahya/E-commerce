import { Injectable } from '@angular/core';
import { Cart } from '../../model/cart/cart';
import { Subject } from 'rxjs';
import { ApiProducts } from '../../model/api-products/api-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartQuantitySubject = new Subject<number>();
cartPriceSubject = new Subject<number>();
cartQuantityNumber:number=0;
cartPriceNumber:number=0;
cart:Cart=new Cart("",0,0,[]);

addToCart(product:ApiProducts,price:number):void{
this.cart.products.push(product)
this.cart.quantity+=product.quantity;
this.cart.price+=price;

this.cartPriceNumber+=price
this.cartQuantityNumber+=product.quantity;

this.updateCart();
}

removeFromCart(product:ApiProducts,price:number):void{
  if(this.cart.quantity!==0){
    const newProducts = this.cart.products.filter((p)=>p.id!=product.id)
this.cart.price-=price;
this.cart.quantity-=product.quantity;
this.cart.products=newProducts;
this.cartPriceNumber-=price;
this.cartQuantityNumber-=product.quantity;

this.updateCart()
  }
}


updateCart(){
  this.cartQuantitySubject.next(this.cartQuantityNumber);
  this.cartPriceSubject.next(this.cartPriceNumber);
}
DeleteCart():void{
  this.cart.products=[];
  this.cart.price=0;this.cart.quantity=0;

  this.cartPriceNumber=0;
  this.cartQuantityNumber=0;

  this.updateCart();
}

searchIncart(product:ApiProducts):boolean{
  return this.cart.products.filter((p)=>p.id===product.id).length>0
}

  constructor() { 
   
  }

  ngOnInit(){ 
    this.cartPriceSubject.next(this.cartPriceNumber);
    this.cartQuantitySubject.next(this.cartQuantityNumber);}
}
