import Language from "../../src/language";
import binaryOperation from "../../src/interpreters/binaryOperation";

describe("interprets binary operations", () => {
  test('interprets basic operations', () => {
    const plusAst = Language.BinaryOperation.tryParse('(2+13.8)');
    const minusAst = Language.BinaryOperation.tryParse('(23.5--3.5)');
    const asteriskAst = Language.BinaryOperation.tryParse('(15*3)');
    const slashAst = Language.BinaryOperation.tryParse('(15/3)');

    expect(binaryOperation(plusAst)).toEqual(15.8);
    expect(binaryOperation(minusAst)).toEqual(27.0);
    expect(binaryOperation(asteriskAst)).toEqual(45);
    expect(binaryOperation(slashAst)).toEqual(5);
  });

  test("interprets nested operations", () => {
    const operationAst = Language.BinaryOperation.tryParse('(12+(3*2.5))');

    expect(binaryOperation(operationAst)).toEqual(19.5);
  });
});
