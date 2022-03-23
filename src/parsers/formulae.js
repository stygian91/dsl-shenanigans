/**
 * External dependencies:
 */
import Parsimmon from "parsimmon";
import * as F from "funky-lib"

const formulae = {
  SumOverRange: (r) => Parsimmon
    .seqObj(
      Parsimmon.string('sum'),
      Parsimmon.optWhitespace,
      ['operation', r.BinaryOperation],
      Parsimmon.optWhitespace,
      Parsimmon.string('where'),
      Parsimmon.optWhitespace,
      ['variables', r.VariableAssignment],
      Parsimmon.optWhitespace,
      ['range', r.RangeAssignment],
    )
    .node('SumOverRange'),

  VariableAssignment: (r) => Parsimmon
    .sepBy1(
      Parsimmon.seqObj(
        ['identifier', r.Identifier.map(F.prop('value'))],
        Parsimmon.optWhitespace,
        Parsimmon.string('='),
        Parsimmon.optWhitespace,
        ['value', r.Number],
      ),

      Parsimmon.seq(
        Parsimmon.optWhitespace,
        Parsimmon.string(','),
        Parsimmon.optWhitespace,
      )
    )
    .node('VariableAssignment'),

  RangeAssignment: (r) => Parsimmon
    .seqObj(
      Parsimmon.string('for'),
      Parsimmon.optWhitespace,
      ['identifier', r.Identifier.map(F.prop('value'))],
      Parsimmon.optWhitespace,
      Parsimmon.string('='),
      Parsimmon.optWhitespace,
      ['from', r.Number],
      Parsimmon.optWhitespace,
      Parsimmon.string('to'),
      Parsimmon.optWhitespace,
      ['to', r.Number],
    )
    .node('RangeAssignment'),
};

export default formulae;
