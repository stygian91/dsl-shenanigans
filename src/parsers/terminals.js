/**
 * External dependencies:
 */
import Parsimmon from "parsimmon";

export default {
  OptionalWhitespace: () => Parsimmon
    .regex(/\s*/)
    .node('OptionalWhitespace'),

  Integer: () => Parsimmon
    .regex(/\d+/)
    .map(Number)
    .node('Integer'),

  Float: () => Parsimmon
    .regex(/\d+\.\d+/)
    .map(Number)
    .node('Float'),

  Asterisk: () => Parsimmon
    .string('*')
    .node('Asterisk'),

  LeftParenthesis: Parsimmon
    .string('(')
    .node('LeftParenthesis'),

  RightParenthesis: Parsimmon
    .string(')')
    .node('RightParenthesis'),
};
