import number from "../../src/interpreters/number";
import Language from "../../src/language";

describe('interprets numbers', () => {
  test('interprets integers', () => {
    const ast = Language.Number.tryParse('99');
    const result = number(ast);

    expect(result).toEqual(99);
  });

  test('interprets floats', () => {
    const ast = Language.Number.tryParse('-76.145');
    const result = number(ast);

    expect(result).toEqual(-76.145);
  });
});
