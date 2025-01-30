import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  switchFav(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/products/${product.id}`, {
      isFavorite: !product.isFavorite
    });
  }
}
