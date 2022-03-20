/**
 * External dependencies:
 */
import Parsimmon from "parsimmon";

export default {
  ArithmeticOperator: (r) => Parsimmon
    .alt(
      r.Plus,
      r.Minus,
      r.Asterisk,
      r.Slash
    )
    .node('ArithmeticOperator'),

  Term: (r) => Parsimmon
    .alt(
      r.BinaryOperation,
      r.Number,
    )
    .node('Term'),

  BinaryOperation: (r) => Parsimmon
      .seqObj(
        r.LeftParenthesis,
        r.OptionalWhitespace,
        ['left', r.Term],
        r.OptionalWhitespace,
        ['operator', r.ArithmeticOperator],
        r.OptionalWhitespace,
        ['right', r.Term],
        r.OptionalWhitespace,
        r.RightParenthesis,
      )
      .node('BinaryOperation'),
};
