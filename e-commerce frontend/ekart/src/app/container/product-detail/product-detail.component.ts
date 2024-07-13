import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product/product';
import { ApiProducts } from '../../model/api-products/api-products';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnChanges{
selectedQuantity: number=1;

ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
}

  @Input()
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
