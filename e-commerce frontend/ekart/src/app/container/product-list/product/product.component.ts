import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../model/product/product';
import { EmptyExpr } from '@angular/compiler';
import { ApiProducts } from '../../../model/api-products/api-products';
import { ProductService } from '../../../service/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  constructor(private productService:ProductService, private router:Router){}


ngOnInit(): void {
}

  addToListMessage :boolean=false;
addedToListMessage: boolean=false;
showAddToWishListMessage() {
  this.addToListMessage=true;
  }
hideAddToWishListMessage() {
  this.addToListMessage=false;
}

showAddedToWishListMessage() {
  this.addedToListMessage=!this.addedToListMessage;

}



  @Input()
  product!: ApiProducts;
  showingTooltip = false;
  wishlistAdded = false;

  showTooltip() {
    this.showingTooltip = true;
  }

  hideTooltip() {
    this.showingTooltip = false;
  }

  toggleWishlist() {
    this.wishlistAdded = !this.wishlistAdded;
    if (this.wishlistAdded) {
      // Add item to wishlist logic
      alert('Added to Wishlist');
    } else {
      // Remove item from wishlist logic
      alert('Removed from Wishlist');
    }
  }

  @Output()
  onSelectProduct:EventEmitter<ApiProducts> = new EventEmitter();


  getPriceAfterDiscount(p: ApiProducts) {
    return (p.price - (p.discountPercentage / 100 * p.price))
  }




selectProduct(product:ApiProducts,event:Event){
  // this.onSelectProduct.emit(this.product);
  event.preventDefault()
  this.productService.selectedProduct=product;
  this.productService.showSelectedP.next(true);
  //this.router.navigate(['products/detail'])
}
}
