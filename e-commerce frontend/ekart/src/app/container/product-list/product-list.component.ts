import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../model/product/product';
import { ProductService } from '../../service/product/product.service';
import { ApiProducts } from '../../model/api-products/api-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements DoCheck,OnInit{
  ngOnInit(): void {
    this.getAllProducts();
  }


  constructor(private productService:ProductService){}
apiProducts:ApiProducts[]=[]

  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.apiProducts = res;
        ApiProducts.optimizeDiscountPercentage(this.apiProducts);

        console.log("inside api method",this.apiProducts);
      },
      error: (err) => {
        console.error('Failed to fetch products:', err);
      }
    });
  
  }

ngDoCheck(): void {
    console.log(this.searchedInput)
}

  @Input()
  searchedInput:string='';

  @Output()
sendSelectedProduct:EventEmitter<ApiProducts>= new EventEmitter();

selectedProduct(p: ApiProducts) {
this.sendSelectedProduct.emit(p);
}
  
filterProducts(productsFilter: String) {
console.log(productsFilter)}

  productInCart:number=0;

  product1:Product = {
    image:"https://th.bing.com/th/id/R.d50d047f742488f73ed94c7f52c8fb96?rik=T%2fNzS3e3v9Susw&pid=ImgRaw&r=0",
    name:"laptop",
    price:2040,
    description:"nice laptop",
    inStock:15,
    discount:10
  }

  product2:Product = {
    image:"https://th.bing.com/th/id/R.d50d047f742488f73ed94c7f52c8fb96?rik=T%2fNzS3e3v9Susw&pid=ImgRaw&r=0",
    name:"pc",
    price:2040,
    description:"nice pc",
    inStock:3,
    discount:10
  }

  product3:Product = {
    image:"https://th.bing.com/th/id/R.d50d047f742488f73ed94c7f52c8fb96?rik=T%2fNzS3e3v9Susw&pid=ImgRaw&r=0",
    name:"mac",
    price:2040,
    description:"nice mac",
    inStock:0,
    discount:10
  }
  products=[
    this.product1,this.product2,this.product3
  ]


}
