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
      r.Identifier,
      r.Number,
    )
    .node('Term'),

  BinaryOperation: (r) => Parsimmon
      .seqObj(
        r.LeftParenthesis,
        Parsimmon.optWhitespace,
        ['left', r.Term],
        Parsimmon.optWhitespace,
        ['operator', r.ArithmeticOperator],
        Parsimmon.optWhitespace,
        ['right', r.Term],
        Parsimmon.optWhitespace,
        r.RightParenthesis,
      )
      .node('BinaryOperation'),
};
