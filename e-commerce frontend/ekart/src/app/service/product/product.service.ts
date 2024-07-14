import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiProducts } from '../../model/api-products/api-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
  ngOnInit(): void {
      this.showSelectedP.next(false);
  }
  showSelectedP=new Subject<boolean>();

selectedProduct!:ApiProducts;

searchedProductQuery:string = '';

products:ApiProducts[]=[];

  private baseUrl: string = "http://localhost:8080/api/onlineProducts";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ApiProducts[]> {
    const api = this.baseUrl + "";
    return this.http.get<ApiProducts[]>(api).pipe(
      map(response => {
        console.log("in the api,", response);
        return response;  // Ensure this returns the array of products
      })
    );
  }

  getProdctsBySearch(searchedValue:string): Observable<ApiProducts[]> {
    const api = this.baseUrl + "/search?name="+searchedValue;
    return this.http.get<ApiProducts[]>(api).pipe(
      map(response => {
        console.log("in the api,", response);
        return response;  // Ensure this returns the array of products
      })
    );
  }

  getProdctsByCategory(categoryName:string): Observable<ApiProducts[]> {
    const api = this.baseUrl + "/category?name="+categoryName;
    return this.http.get<ApiProducts[]>(api).pipe(
      map(response => {
        console.log("in the api,", response);
        return response;  // Ensure this returns the array of products
      })
    );
  }

}
