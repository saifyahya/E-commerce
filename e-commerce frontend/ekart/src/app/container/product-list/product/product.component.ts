import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../model/product/product';
import { EmptyExpr } from '@angular/compiler';
import { ApiProducts } from '../../../model/api-products/api-products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{


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




selectProduct(){
  this.onSelectProduct.emit(this.product);
}
}
