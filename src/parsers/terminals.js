/**
 * External dependencies:
 */
import Parsimmon from "parsimmon";
import * as F from "funky-lib";

export default {
  Integer: () => Parsimmon
    .regex(/-?\d+/)
    .map(Number)
    .node('Integer'),

  Float: () => Parsimmon
    .regex(/-?\d+\.\d+/)
    .map(Number)
    .node('Float'),

  Asterisk: () => Parsimmon
    .string('*')
    .node('Asterisk'),

  Plus: () => Parsimmon
    .string('+')
    .node('Plus'),

  Minus: () => Parsimmon
    .string('-')
    .node('Minus'),

  Slash: () => Parsimmon
    .string('/')
    .node('Slash'),

  LeftParenthesis: () => Parsimmon
    .string('(')
    .node('LeftParenthesis'),

  RightParenthesis: () => Parsimmon
    .string(')')
    .node('RightParenthesis'),

  Identifier: () => Parsimmon
    .regex(/[a-zA-Z][a-zA-Z0-9_]*/)
    .node('Identifier'),
};
