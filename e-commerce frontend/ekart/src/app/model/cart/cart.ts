import { Product } from "../product/product";

export class Cart{   
    private code:string;

    private quantity:number;

    private price:number;

    private products:Product[];

    constructor(code:string,quantity:number,price:number,products:Product[]){
        this.code=code;
        this.price=price;
        this.products=products;
        this.quantity=quantity;
    }
}