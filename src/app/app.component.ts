import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { SortByDate } from './product.pipe';
import { SortOption } from './Model/SortOption';
import { FormsModule } from '@angular/forms';
import { SortByNamePipe } from "./sort-by-name.pipe";
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCardComponent, SortByDate, FormsModule, SortByNamePipe],
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ countFav }} {{ countFav <= 1 ? 'Favori' : 'Favoris' }}</h2>

    <select [(ngModel)]="selectedSort">
      @for (option of sortOptions; track option.id) {
      <option [value]="option.id">{{ option.label }}</option>
      }
    </select>

    @if (selectedSort === 'date-asc' || selectedSort === 'date-desc') { @for
    (product of products | sortByDate:(selectedSort === 'date-asc'); track
    product.id) {
    <app-product-card
      [product]="product"
      (addItemEvent)="updateFavoriteCount($event)"
    />
    } } @if (selectedSort === 'name-asc' || selectedSort === 'name-desc') { @for
    (product of products | sortByName:(selectedSort === 'name-asc'); track
    product.id) {
    <app-product-card
      [product]="product"
      (addItemEvent)="updateFavoriteCount($event)"
    />
    } }
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'Personnages de Harry Potter';
  countFav = 0;
  selectedSort = 'date-asc';

  productService = inject(ProductService);
  products = this.productService.getProducts();

  sortOptions: SortOption[] = [
    { id: 'date-asc', label: 'Date (plus ancien)' },
    { id: 'date-desc', label: 'Date (plus récent)' },
    { id: 'name-asc', label: 'Nom (A-Z)' },
    { id: 'name-desc', label: 'Nom (Z-A)' },
  ];




  updateFavoriteCount(item: number): void {
    this.countFav += item;
  }
}
