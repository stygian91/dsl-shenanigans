/**
 * External dependencies:
 */
import Parsimmon from "parsimmon";

export default {
  Multiply: (r) => Parsimmon
    .seqObj(
      ['left', r.Number],
      r.OptionalWhitespace,
      r.Asterisk,
      r.OptionalWhitespace,
      ['right', r.Number]
    )
    .node('Multiply'),
};
