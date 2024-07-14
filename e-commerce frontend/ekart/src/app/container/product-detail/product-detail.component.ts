import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product/product';
import { ApiProducts } from '../../model/api-products/api-products';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
close(e: MouseEvent) {
e.preventDefault()
this.productService.showSelectedP.next(false)
}

constructor(private productService:ProductService){}


selectedQuantity: number=1;

ngOnInit(): void {
this.selectedProduct=this.productService.selectedProduct;
console.log("prodect details called")
console.log(this.selectedProduct)
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
