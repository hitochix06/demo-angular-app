import { SortByDate } from './product.pipe';

describe('SortByDatePipe', () => {
  it('create an instance', () => {
    const pipe = new SortByDate();
    expect(pipe).toBeTruthy();
  });
});
