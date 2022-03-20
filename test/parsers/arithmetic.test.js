import Language from "../../src/language";
import { filterOutPosition } from "./utils";

describe("parses arithmetic operations", () => {
  test('adds 2 numbers', () => {
    const program = '(42+3.14)';
    const result = Language.BinaryOperation.tryParse(program);

    const expected = {
      name: 'BinaryOperation',
      value: {
        left: {
          name: 'Term',
          value: {
            name: 'Number',
            value: {
              name: 'Integer',
              value: 42,
            },
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
            name: 'Number',
            value: {
              name: 'Float',
              value: 3.14,
            },
          },
        },
      },
    };

    expect(filterOutPosition(result)).toEqual(expected);
  });

  test('parses nested arithmetic operations', () => {
    const program = '(31 + (55.1 / 2))';
    const result = Language.BinaryOperation.tryParse(program);

    const expected = {
      name: 'BinaryOperation',
      value: {
        left: {
          name: 'Term',
          value: {
            name: 'Number',
            value: {
              name: 'Integer',
              value: 31,
            },
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
            name: 'BinaryOperation',
            value: {
              left: {
                name: 'Term',
                value: {
                  name: 'Number',
                  value: {
                    name: 'Float',
                    value: 55.1,
                  },
                },
              },
              operator: {
                name: 'ArithmeticOperator',
                value: {
                  name: 'Slash',
                  value: '/',
                },
              },
              right: {
                name: 'Term',
                value: {
                  name: 'Number',
                  value: {
                    name: 'Integer',
                    value: 2,
                  },
                },
              },
            },
          },
        },
      },
    };

    expect(filterOutPosition(result)).toEqual(expected);
  });
});
