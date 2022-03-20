import * as F from 'funky-lib';

import Language from "../../src/language";
import arithmeticOperator from '../../src/interpreters/arithmeticOperator';
import InterpreterError from "../../src/interpreters/interpreterError";

describe('interprets arithmetic operators', () => {
  test('interprets basic arithmetic operators', () => {
    const plusAst = Language.ArithmeticOperator.tryParse('+');
    const minusAst = Language.ArithmeticOperator.tryParse('-');
    const asteriskAst = Language.ArithmeticOperator.tryParse('*');
    const slashAst = Language.ArithmeticOperator.tryParse('/');

    expect(arithmeticOperator(plusAst)).toEqual(F.add);
    expect(arithmeticOperator(minusAst)).toEqual(F.subtract);
    expect(arithmeticOperator(asteriskAst)).toEqual(F.multiply);
    expect(arithmeticOperator(slashAst)).toEqual(F.divide);
  });

  test('throws error on unknown arithmetic operators', () => {
    const unknownAst = {
      name: 'ArithmeticOperator',
      value: {
        name: 'UnknownOperator',
        value: '`',
      },
    };

    expect(() => arithmeticOperator(unknownAst)).toThrow(InterpreterError);
  });
});
