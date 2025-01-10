import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from './Model/product';
import { SortByDate } from './product.pipe';
import { SortOption } from './Model/SortOption';
import { FormsModule } from '@angular/forms';
import { SortByNamePipe } from "./sort-by-name.pipe";

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

  sortOptions: SortOption[] = [
    { id: 'date-asc', label: 'Date (plus ancien)' },
    { id: 'date-desc', label: 'Date (plus récent)' },
    { id: 'name-asc', label: 'Nom (A-Z)' },
    { id: 'name-desc', label: 'Nom (Z-A)' },
  ];

  products: Product[] = [
    {
      id: 0,
      name: 'Harry Potter',
      isFavorite: false,
      createdDate: new Date(1980, 6, 31),
    },
    {
      id: 1,
      name: 'Ronnald Weasley',
      isFavorite: false,
      createdDate: new Date(1980, 3, 1),
    },
    {
      id: 2,
      name: 'Hermione Granger',
      isFavorite: false,
      createdDate: new Date(1979, 8, 19),
    },
    {
      id: 3,
      name: 'Neville Londubas',
      isFavorite: false,
      createdDate: new Date(1980, 7, 30),
    },
    {
      id: 4,
      name: 'Albus Dumbledore',
      isFavorite: false,
      createdDate: new Date(1881, 7, 30),
    },
    {
      id: 5,
      name: 'Severus Snape',
      isFavorite: false,
      createdDate: new Date(1960, 1, 9),
    },
    {
      id: 6,
      name: 'Draco Malfoy',
      isFavorite: false,
      createdDate: new Date(1980, 5, 5),
    },
    {
      id: 7,
      name: 'Luna Lovegood',
      isFavorite: false,
      createdDate: new Date(1981, 2, 13),
    },
    {
      id: 8,
      name: 'Ginny Weasley',
      isFavorite: false,
      createdDate: new Date(1981, 7, 11),
    },
    {
      id: 9,
      name: 'Fred Weasley',
      isFavorite: false,
      createdDate: new Date(1978, 3, 1),
    },
    {
      id: 10,
      name: 'George Weasley',
      isFavorite: false,
      createdDate: new Date(1978, 3, 1),
    },
    {
      id: 11,
      name: 'Minerva McGonagall',
      isFavorite: false,
      createdDate: new Date(1935, 9, 4),
    },
    {
      id: 12,
      name: 'Hagrid',
      isFavorite: false,
      createdDate: new Date(1928, 11, 6),
    },
    {
      id: 13,
      name: 'Sirius Black',
      isFavorite: false,
      createdDate: new Date(1960, 10, 11),
    },
    {
      id: 14,
      name: 'Remus Lupin',
      isFavorite: false,
      createdDate: new Date(1960, 2, 10),
    },
  ];

  updateFavoriteCount(value: number): void {
    this.countFav += value;
  }
}
