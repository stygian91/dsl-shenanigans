import language from "../../src/language";
import sumOverRange from "../../src/interpreters/sumOverRange";
import productOverRange from "../../src/interpreters/productOverRange";

describe('Formulae', () => {
  test('Sum over range', () => {
    const ast = language.SumOverRange.tryParse('sum (x * (2 + n)) where x = 10 for n = 1 to 10');
    expect(sumOverRange(ast)).toEqual(750);
  });

  test('Product over range', () => {
    const ast = language.ProductOverRange.tryParse('product (x * (1 + n)) where x = 2 for n = 1 to 3');
    expect(productOverRange(ast)).toEqual(192);
  });

  test('Throws with incorrect boundary', () => {
    const ast = language.SumOverRange.tryParse('sum (y - (2 + n)) where y = 3.14 for n = 10 to 9');
    expect(() => sumOverRange(ast)).toThrow();
  });
});
