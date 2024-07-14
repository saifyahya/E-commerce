import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../model/product/product';
import { ApiProducts } from '../model/api-products/api-products';
import { ProductService } from '../service/product/product.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit,DoCheck{
  constructor(private productService: ProductService){}

showProductDetails:boolean=false;
  ngOnInit(): void {
    console.log("container initailized");
    
    this.productService.showSelectedP.subscribe(data=>this.showProductDetails=data);
  }
ngDoCheck(): void {
  console.log("container will show product details: ",this.showProductDetails)

}
 
  // @Input()
  // recievedSearchedInput:string='';

recievedProduct!:ApiProducts;

recieveSelectedProduct(p: ApiProducts) {
this.recievedProduct=p;
}


}
