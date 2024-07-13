import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiProducts } from '../../model/api-products/api-products';
import { ApiResponse } from '../../model/api-products/api-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = "http://localhost:8080/api/";
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ApiProducts[]> {
    const api = this.baseUrl + "onlineProducts";
    return this.http.get<ApiProducts[]>(api).pipe(
      map(response => {
        console.log("in the api,", response);
        return response;  // Ensure this returns the array of products
      })
    );
  }
}
