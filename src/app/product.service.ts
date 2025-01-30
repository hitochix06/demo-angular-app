import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Product } from './Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly http = inject(HttpClient);
  private readonly products = signal<Product[]>([]);
  readonly url = 'http://localhost:3000';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`).pipe(
      tap(products => this.products.set(products))
    );
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.url}/products/${id}`).pipe(
      tap(product => console.log(product))
    );
  }

  switchFav(product: Product) {
    product.isFavorite = !product.isFavorite;
  }
}
