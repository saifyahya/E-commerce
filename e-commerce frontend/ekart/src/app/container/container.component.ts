import { Component, Input } from '@angular/core';
import { Product } from '../model/product/product';
import { ApiProducts } from '../model/api-products/api-products';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  @Input()
  recievedSearchedInput:string='';

recievedProduct!:ApiProducts;

recieveSelectedProduct(p: ApiProducts) {
this.recievedProduct=p;
}


}
