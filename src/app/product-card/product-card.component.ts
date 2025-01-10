import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../Model/product';


@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="product-card">
      <h1>{{ product.name  }}</h1>
      <p>Créé le: {{ product.createdDate | date: 'dd/MM/yyyy' }}</p>
      @if (isFavorite){
      <button (click)="switchFav()">⭐</button>
      } @else {
      <button (click)="switchFav()">☆</button>
      }
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
