import Language from "../../src/language";

describe("parses arithmetic operations", () => {
  test('adds 2 numbers', () => {
    const program = '(42+3.14)';
    const result = Language.BinaryOperation.tryParse(program);

    expect(result.name).toEqual('BinaryOperation');

    expect(result.value.left.name).toEqual('Term');
    expect(result.value.right.name).toEqual('Term');

    expect(result.value.left.value.name).toEqual('Number');
    expect(result.value.right.value.name).toEqual('Number');

    expect(result.value.left.value.value.name).toEqual('Integer');
    expect(result.value.right.value.value.name).toEqual('Float');
    expect(result.value.operator.value.name).toEqual('Plus');

    expect(result.value.left.value.value.value).toEqual(42);
    expect(result.value.right.value.value.value).toEqual(3.14);
  });

  // TODO: make a utility function that compares expected and actual result objects
  // which ignores the "start" and "end" properties
  // so this messy test can be rewritten
  test('parses nested arithmetic operations', () => {
    const program = '(31 + (55.1 / 2))';
    const result = Language.BinaryOperation.tryParse(program);

    expect(result.name).toEqual('BinaryOperation');

    expect(result.value.left.name).toEqual('Term');
    expect(result.value.right.name).toEqual('Term');
    expect(result.value.operator.name).toEqual('ArithmeticOperator');

    expect(result.value.left.value.name).toEqual('Number');
    expect(result.value.right.value.name).toEqual('BinaryOperation');
    expect(result.value.operator.value.name).toEqual('Plus');

    expect(result.value.left.value.value.name).toEqual('Integer');
    expect(result.value.left.value.value.value).toEqual(31);

    expect(result.value.right.value.value.left.name).toEqual('Term');
    expect(result.value.right.value.value.right.name).toEqual('Term');
    expect(result.value.right.value.value.operator.name).toEqual('ArithmeticOperator');

    expect(result.value.right.value.value.left.value.name).toEqual('Number');
    expect(result.value.right.value.value.right.value.name).toEqual('Number');
    expect(result.value.right.value.value.operator.value.name).toEqual('Slash');

    expect(result.value.right.value.value.left.value.value.name).toEqual('Float');
    expect(result.value.right.value.value.right.value.value.name).toEqual('Integer');
    expect(result.value.right.value.value.left.value.value.value).toEqual(55.1);
    expect(result.value.right.value.value.right.value.value.value).toEqual(2);
  });
});
