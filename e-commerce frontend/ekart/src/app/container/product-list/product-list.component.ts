import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product/product';
import { ProductService } from '../../service/product/product.service';
import { ApiProducts } from '../../model/api-products/api-products';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit,OnChanges{
  ngOnInit(): void {
    this.checkCurrentQueryParams();
  }

  constructor(private productService:ProductService, private route: ActivatedRoute,private router:Router,private location:Location){}

apiProducts:ApiProducts[]=[]



checkCurrentQueryParams(): void {
  this.route.queryParamMap.pipe(      
    debounceTime(100),
    distinctUntilChanged()  // Only emit when the query parameters change
  ).subscribe(queryParamMap => {
    const name = queryParamMap.get('name');
    const category = queryParamMap.get('category');
    if(this.router.url==='/products/detail'){
this.location.back();
    }
    else if (name) {
      console.log("Query parameter 'name' found:", name);
      this.getProductsByName(name);
    } 
    else if (category) {
      console.log("Query parameter 'category' found:", category);
      this.getProductsByCategory(category);
    } 
    else {
      console.log("Query parameter 'name' not found");
      this.getAllProducts();
    }
  });

  // Additional logging to diagnose issue
  console.log('Current route:', this.router.url);
  console.log('Query parameters:', this.route.snapshot.queryParamMap.keys);
  console.log('Query parameter "name":', this.route.snapshot.queryParamMap.get('name'));
  console.log('Full route snapshot:', this.route.snapshot);
}


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


  getProductsByName(name:string){
    this.productService.getProdctsBySearch(name).subscribe({
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

    getProductsByCategory(name:string){
      this.productService.getProdctsByCategory(name).subscribe({
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

ngOnChanges(changes: SimpleChanges): void {
    console.log('p-list changes',changes)
}

  // @Input()
  // searchedInput:string='';

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
