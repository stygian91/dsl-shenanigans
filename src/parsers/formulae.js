/**
 * External dependencies:
 */
import Parsimmon from "parsimmon";

const formulae = {
  SumOverRange: (r) => Parsimmon
    .seqObj(
      Parsimmon.string('sum'),
      Parsimmon.optWhitespace,
      ['operation', r.BinaryOperation],
      Parsimmon.optWhitespace,
      Parsimmon.string('where'),
      Parsimmon.optWhitespace,
      ['variables', r.MultiAssignment],
      Parsimmon.optWhitespace,
      ['range', r.RangeAssignment],
    )
    .node('SumOverRange'),

  MultiAssignment: (r) => r.VariableAssignment
    .sepBy1(
      Parsimmon.seq(
        Parsimmon.optWhitespace,
        Parsimmon.string(','),
        Parsimmon.optWhitespace,
      )
    )
    .node('MultiAssignment'),

  VariableAssignment: (r) => Parsimmon
    .seqObj(
      ['identifier', r.Identifier],
      Parsimmon.optWhitespace,
      Parsimmon.string('='),
      Parsimmon.optWhitespace,
      ['value', r.Number],
    )
    .node('VariableAssignment'),

  RangeAssignment: (r) => Parsimmon
    .seqObj(
      Parsimmon.string('for'),
      Parsimmon.optWhitespace,
      ['from', r.VariableAssignment],
      Parsimmon.optWhitespace,
      Parsimmon.string('to'),
      Parsimmon.optWhitespace,
      ['to', r.Number],
    )
    .node('RangeAssignment'),
};

export default formulae;
