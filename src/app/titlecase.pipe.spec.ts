import { TitlecasePipe } from './titlecase.pipe';

describe('TitlecasePipe', () => {
  const pipe = new TitlecasePipe();
  it('transform "abc" to "ABC"', () => {
    expect(pipe.transform('abc')).toBe('ABC');
  });
  it('transform "abc def" to "ABC DEF"', () => {
    expect(pipe.transform('abc def')).toBe('ABC DEF');
  });
});
