// tests/sum.test.ts
import { sum } from '../src/sum';

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds -5 + 5 to equal 0', () => {
    expect(sum(-5, 5)).toBe(0);
  });
});
