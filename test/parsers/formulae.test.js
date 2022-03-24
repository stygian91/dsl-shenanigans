import language from "../../src/language";
import { filterOutPosition } from "../utils";

describe('Parses formulae', () => {
  test('parses variable assignments', () => {
    const ast = language.VariableAssignment.tryParse('x = 10, y = 12.3');

    const expected = {
      name: 'VariableAssignment',
      value: [
        {
          identifier: 'x',
          value: {
            base: 'Number',
            name: 'Integer',
            value: 10,
          },
        },

        {
          identifier: 'y',
          value: {
            base: 'Number',
            name: 'Float',
            value: 12.3,
          },
        },
      ],
    };

    expect(filterOutPosition(ast)).toEqual(expected);
  });

  test('parses range assignments', () => {
    const ast = language.RangeAssignment.tryParse('for n=1 to 100');

    const expected = {
      name: 'RangeAssignment',
      value: {
        identifier: 'n',

        from: {
          base: 'Number',
          name: 'Integer',
          value: 1,
        },

        to: {
          base: 'Number',
          name: 'Integer',
          value: 100,
        },
      },
    };

    expect(filterOutPosition(ast)).toEqual(expected);
  });

  test('parses sums', () => {
    const ast = language.SumOverRange.tryParse('sum (x * (2 + n)) where x = 10 for n = 1 to 10');
    const expected = {
      name: 'SumOverRange',
      value: {
        operation: {
          name: 'BinaryOperation',
          value: {
            left: {
              name: 'Term',
              value: {
                name: 'Identifier',
                value: 'x',
              },
            },
            operator: {
              name: 'ArithmeticOperator',
              value: {
                name: 'Asterisk',
                value: '*',
              },
            },
            right: {
              name: 'Term',
              value: {
                name: 'BinaryOperation',
                value: {
                  left: {
                    name: 'Term',
                    value: {
                      base: 'Number',
                      name: 'Integer',
                      value: 2,
                    },
                  },
                  operator: {
                    name: 'ArithmeticOperator',
                    value: {
                      name: 'Plus',
                      value: '+',
                    },
                  },
                  right: {
                    name: 'Term',
                    value: {
                      name: 'Identifier',
                      value: 'n',
                    },
                  },
                },
              },
            },
          },
        },
        variables: {
          name: 'VariableAssignment',
          value: [
            {
              identifier: 'x',
              value: {
                base: 'Number',
                name: 'Integer',
                value: 10,
              },
            }
          ],
        },
        range: {
          name: 'RangeAssignment',
          value: {
            identifier: 'n',

            from: {
              base: 'Number',
              name: 'Integer',
              value: 1,
            },

            to: {
              base: 'Number',
              name: 'Integer',
              value: 10,
            },
          },
        },
      },
    };

    expect(filterOutPosition(ast)).toEqual(expected);
  });
});
