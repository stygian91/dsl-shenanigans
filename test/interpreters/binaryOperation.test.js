import Language from "../../src/language";
import binaryOperation from "../../src/interpreters/binaryOperation";

describe("interprets binary operations", () => {
  test('interprets basic operations', () => {
    const plusAst = Language.BinaryOperation.tryParse('(2+13.8)');
    const minusAst = Language.BinaryOperation.tryParse('(23.5--3.5)');
    const asteriskAst = Language.BinaryOperation.tryParse('(15*3)');
    const slashAst = Language.BinaryOperation.tryParse('(15/3)');
    const binaryWithContext = (ast) => binaryOperation({}, ast);


    expect(binaryWithContext(plusAst)).toEqual(15.8);
    expect(binaryWithContext(minusAst)).toEqual(27.0);
    expect(binaryWithContext(asteriskAst)).toEqual(45);
    expect(binaryWithContext(slashAst)).toEqual(5);
  });

  test("interprets nested operations", () => {
    const operationAst = Language.BinaryOperation.tryParse('(12+(3*2.5))');

    expect(binaryOperation({}, operationAst)).toEqual(19.5);
  });
});
