import { ApiProducts } from "../api-products/api-products";
import { Product } from "../product/product";

export class Cart{   
     code:string;

     quantity:number;

     price:number;

     products:ApiProducts[];

    constructor(code:string,quantity:number,price:number,products:ApiProducts[]){
        this.code=code;
        this.price=price;
        this.products=products;
        this.quantity=quantity;
    }
}