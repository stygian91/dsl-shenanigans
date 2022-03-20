import InterpreterError from "../../src/interpreters/interpreterError";
import term from "../../src/interpreters/term";
import Language from "../../src/language";

describe('interprets terms', () => {
  test('interprets simple terms', () => {
    const program = '(82-2.5)';
    const ast = Language.BinaryOperation.tryParse(program);

    const left = ast.value.left;
    const right = ast.value.right;

    expect(term(left)).toEqual(82);
    expect(term(right)).toEqual(2.5);
  });

  test('throws error for unknown terms', () => {
    const unknownAst = {
      name: 'Term',
      value: {
        name: "UnknownTerm",
        value: 'asd',
      },
    };

    expect(() => term(unknownAst)).toThrow(InterpreterError);
  });
});
