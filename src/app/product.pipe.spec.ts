import { SortByDatePipe } from './product.pipe';

describe('SortByDatePipe', () => {
  it('create an instance', () => {
    const pipe = new SortByDatePipe();
    expect(pipe).toBeTruthy();
  }); 
});
