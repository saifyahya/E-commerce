import { ApiProducts } from "./api-products";

export class ApiResponse{
    products:ApiProducts[];


    constructor(products:ApiProducts[]){
        this.products=products
    }
}