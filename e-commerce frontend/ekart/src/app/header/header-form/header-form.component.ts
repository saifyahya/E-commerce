import { Component, EventEmitter, Output, output, Query, QueryList } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header-form',
  templateUrl: './header-form.component.html',
  styleUrl: './header-form.component.css'
})
export class HeaderFormComponent {

  constructor(private productService:ProductService,private router: Router){

  }

  @Output() searchedValue: EventEmitter<string> = new EventEmitter();

  getSearchedInput(event: Event, searchInputEle: HTMLInputElement) {
    event.preventDefault();
    this.searchedValue.emit(searchInputEle.value);
    //this.productService.searchedProductQuery=searchInputEle.value;

    this.router.navigate(['/products/'],{ queryParams: { name: searchInputEle.value } })
  }



}
