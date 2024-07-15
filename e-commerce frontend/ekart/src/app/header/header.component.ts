import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WhishlistService } from '../service/whishlist/whishlist.service';
import { CartService } from '../service/cart/cart.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements
OnInit{

  whishlistItems:number=0
  cartQuantityItems: number=0;
  constructor(private router: Router,private whishlistService:WhishlistService,private cartService:CartService) {}
ngOnInit(): void {
    this.whishlistService.whishListSubject.subscribe((data)=>this.whishlistItems=data)
    this.cartService.cartQuantitySubject.subscribe((data)=>this.cartQuantityItems=data)}

    navigateToHome(event:Event) {
      event.preventDefault()
this.router.navigateByUrl("/products")}


  searchResult: string='';
getSearchedValue(value: string) {
this.searchResult=value;
}

}
