import language from "../../src/language";
import { filterOutPosition } from "../utils";

describe('Parses formulae', () => {
  test('parses single variable assignment', () => {
    const ast = language.VariableAssignment.tryParse('x = 10');
    const expected = {
      name: 'VariableAssignment',
      value: {
        identifier: {
          name: 'Identifier',
          value: 'x',
        },
        value: {
          name: 'Number',
          value: {
            name: 'Integer',
            value: 10,
          },
        },
      },
    };

    expect(filterOutPosition(ast)).toEqual(expected);
  });

  test('parses multiple variable assignments', () => {
    const ast = language.MultiAssignment.tryParse('x = 10, y = 12.3');
    const expected = {
      name: 'MultiAssignment',
      value: [
        {
          name: 'VariableAssignment',
          value: {
            identifier: {
              name: 'Identifier',
              value: 'x',
            },
            value: {
              name: 'Number',
              value: {
                name: 'Integer',
                value: 10,
              },
            },
          },
        },

        {
          name: 'VariableAssignment',
          value: {
            identifier: {
              name: 'Identifier',
              value: 'y',
            },
            value: {
              name: 'Number',
              value: {
                name: 'Float',
                value: 12.3,
              },
            },
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
        from: {
          name: 'VariableAssignment',
          value: {
            identifier: {
              name: 'Identifier',
              value: 'n',
            },
            value: {
              name: 'Number',
              value: {
                name: 'Integer',
                value: 1,
              },
            },
          },
        },
        to: {
          name: 'Number',
          value: {
            name: 'Integer',
            value: 100,
          },
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
                      name: 'Number',
                      value: {
                        name: 'Integer',
                        value: 2,
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
          name: 'MultiAssignment',
          value: [
            {
              name: 'VariableAssignment',
              value: {
                  identifier: {
                    name: 'Identifier',
                    value: 'x'
                  },
                  value: {
                    name: 'Number',
                    value: {
                      name: 'Integer',
                      value: 10,
                    },
                  },
              },
            }
          ],
        },
        range: {
          name: 'RangeAssignment',
          value: {
            from: {
              name: 'VariableAssignment',
              value: {
                identifier: {
                  name: 'Identifier',
                  value: 'n',
                },
                value: {
                  name: 'Number',
                  value: {
                    name: 'Integer',
                    value: 1,
                  },
                },
              },
            },
            to: {
              name: 'Number',
              value: {
                name: 'Integer',
                value: 10,
              },
            },
          },
        },
      },
    };

    expect(filterOutPosition(ast)).toEqual(expected);
  });
});
