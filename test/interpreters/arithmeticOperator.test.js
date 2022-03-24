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
    const opWithContext = (ast) => arithmeticOperator({}, ast);

    expect(opWithContext(plusAst)).toEqual(F.add);
    expect(opWithContext(minusAst)).toEqual(F.subtract);
    expect(opWithContext(asteriskAst)).toEqual(F.multiply);
    expect(opWithContext(slashAst)).toEqual(F.divide);
  });

  test('throws error on unknown arithmetic operators', () => {
    const unknownAst = {
      name: 'ArithmeticOperator',
      value: {
        name: 'UnknownOperator',
        value: '`',
      },
    };

    expect(() => arithmeticOperator({}, unknownAst)).toThrow(InterpreterError);
  });
});
