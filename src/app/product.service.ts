import { Injectable } from '@angular/core';
import { Product } from './Model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly products: Product[] = [
    {
      id: 1,
      name: 'Harry Potter',
      isFavorite: false,
      createdDate: new Date('2024-01-01'),
    },
    {
      id: 2,
      name: 'Hermione Granger',
      isFavorite: false,
      createdDate: new Date('2024-01-02'),
    },
    {
      id: 3,
      name: 'Ron Weasley',
      isFavorite: false,
      createdDate: new Date('2024-01-03'),
    },
    {
      id: 4,
      name: 'Albus Dumbledore',
      isFavorite: false,
      createdDate: new Date('2024-01-04'),
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((p) => p.id === id);
  }

  swithFav(product: Product) {
    product.isFavorite = !product.isFavorite;
  }
}
