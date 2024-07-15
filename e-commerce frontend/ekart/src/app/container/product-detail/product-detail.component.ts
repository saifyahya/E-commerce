import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product/product';
import { ApiProducts } from '../../model/api-products/api-products';
import { ProductService } from '../../service/product/product.service';
import { ThisReceiver } from '@angular/compiler';
import { CartService } from '../../service/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  addToCartText=""

checkCurrentRout():boolean{
 return this.router.url!=="/products/cart"
}


  checkProductIncart():void{
     const productExist=this.cartService.searchIncart(this.selectedProduct);
     if(productExist){
    this.addToCartText="Go To Cart"
     }else{
    this.addToCartText="Add To Cart"
     }
  }
addToCart(event:Event) {
  const productExist=this.cartService.searchIncart(this.selectedProduct);
if(productExist ){ 
this.productService.showSelectedP.next(false);
   this.router.navigateByUrl("/products/cart")

}else{
  this.selectedProduct.quantity=this.selectedQuantity;
const price=this.getPriceAfterDiscount((this.selectedProduct))*this.selectedQuantity;
this.cartService.addToCart(this.selectedProduct,parseFloat(price.toFixed(2)))
}
this.checkProductIncart()

}
close(e: MouseEvent) {
e.preventDefault()
this.productService.showSelectedP.next(false)
}

constructor(private productService:ProductService,private cartService:CartService,private router :Router){}


selectedQuantity: number=1;

ngOnInit(): void {
this.selectedProduct=this.productService.selectedProduct;
console.log("prodect details called")
console.log(this.selectedProduct)
this.checkProductIncart()
}

  selectedProduct!:ApiProducts;


  getStockArray(): number[] {
    return Array(this.selectedProduct.stock).fill(0).map((_, i) => i + 1);
  }

  getPriceAfterDiscount(p: ApiProducts) {
    if(p.discountPercentage>5)
    return (p.price - (p.discountPercentage / 100 * p.price))
  return p.price;
  }
}
