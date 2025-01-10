import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Model/product';
@Pipe({
  name: 'sortByDate',
  standalone: true
})
export class SortByDatePipe implements PipeTransform {
  transform(products: Product[], asc?: boolean) {
    return products.sort((a, b) => {
      return asc
        ? a.createdDate.getTime() - b.createdDate.getTime()
        : b.createdDate.getTime() - a.createdDate.getTime();
    });
  }
}
