import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  },
  {
    path: 'products-list',
    component: ProductsListComponent
  }
];
