import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Model/product';

@Pipe({
  name: 'sortByName',
})
export class SortByNamePipe implements PipeTransform {
  transform(products: Product[], ascending: boolean = true): Product[] {
    return [...products].sort((a, b) => {
      return ascending
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
  }
}
