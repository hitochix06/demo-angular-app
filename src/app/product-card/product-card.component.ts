import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../Model/product';


@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="bg-white rounded-lg shadow-md p-4 m-2 hover:shadow-lg transition-shadow">
      <h1 class="text-xl font-bold text-gray-800">{{ product.name }}</h1>
      <p class="text-sm text-gray-600">Créé le: {{ product.createdDate | date: 'dd/MM/yyyy' }}</p>
      <button
        class="mt-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        (click)="switchFav()">
        {{ isFavorite ? '⭐' : '☆' }}
      </button>
    </div>
  `,
  styles: [
    `
      .product-card {
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
      }
    `,
  ],
})
export class ProductCardComponent {
  @Input({ required: true }) product: Product = {
    id: 0,
    name: '',
    isFavorite: false,
    createdDate: new Date(),
  };
  @Output() addItemEvent = new EventEmitter<number>();
isFavorite: any;

  switchFav() {
    this.isFavorite = !this.isFavorite;
    this.addItemEvent.emit(this.isFavorite ? 1 : -1);
  }
}
