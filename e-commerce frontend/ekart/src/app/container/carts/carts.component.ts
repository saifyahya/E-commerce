import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart/cart.service';
import { Cart } from '../../model/cart/cart';
import { ApiProducts } from '../../model/api-products/api-products';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit {

  cart!: Cart;
  cartQuantityNumber: number = 0;
  cartPriceNumber: number = 0;
  constructor(private cartService: CartService) { }


  removeFromCart(product: ApiProducts) {
    const price =this.getPriceAfterDiscount(product) * product.quantity;
    this.cartService.removeFromCart(product, parseFloat(price.toFixed(2)))
  }

  getPriceAfterDiscount(p: ApiProducts) {
    if (p.discountPercentage > 5)
      return (p.price - (p.discountPercentage / 100 * p.price))
    else
      return (p.price)
  }


  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartService.cartPriceSubject.subscribe((data) => this.cartPriceNumber = data)
    this.cartService.cartQuantitySubject.subscribe((data) => this.cartQuantityNumber = data)
  }

}
