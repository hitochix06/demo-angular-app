import { Component, inject } from '@angular/core';
import { ProductService } from '.././product.service';
import { ProductCardComponent } from '.././product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { Product } from '../Model/product';
import { SortOption } from '../Model/SortOption';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    FormsModule
  ],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-6">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <header class="text-center mb-12">
          <h1 class="text-4xl font-bold text-indigo-800 mb-4">{{ title }}</h1>
          <div
            class="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full"
          >
            <span class="text-xl">{{ countFav }}</span>
            <span class="text-xl">{{
              countFav <= 1 ? 'Favori' : 'Favoris'
            }}</span>
          </div>
        </header>

        <!-- Sort Select -->
        <div class="mb-8 flex justify-center">
          <select
            [(ngModel)]="selectedSort"
            class="w-64 px-4 py-2 rounded-lg border-2 border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-white shadow-sm"
          >
            @for (option of sortOptions; track option.id) {
            <option [value]="option.id">{{ option.label }}</option>
            }
          </select>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          @for (product of getFilteredProducts(); track product.id) {
            <app-product-card
              [product]="product"
              (addItemEvent)="switchFav(product)"
            />
          }
        </div>
      </div>
    </div>
  `,
})
export class ProductsListComponent {
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

  ngOnInit() {
    // Initialiser le compteur de favoris au chargement
    this.countFav = this.products.filter(product => product.isFavorite).length;
  }

  getFilteredProducts(): Product[] {
    console.log('Produits disponibles:', this.products); // Ajouter ce log pour debug
    if (this.selectedSort.startsWith('date')) {
      return [...this.products].sort((a, b) => {
        const multiplier = this.selectedSort === 'date-asc' ? 1 : -1;
        return multiplier * (a.createdDate.getTime() - b.createdDate.getTime());
      });
    } else {
      return [...this.products].sort((a, b) => {
        const multiplier = this.selectedSort === 'name-asc' ? 1 : -1;
        return multiplier * a.name.localeCompare(b.name);
      });
    }
  }

  switchFav(product: Product) {
    product.isFavorite = !product.isFavorite;
    this.countFav += product.isFavorite ? 1 : -1;
  }
}
