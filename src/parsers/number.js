/**
 * External dependencies:
 */
import Parsimmon from 'parsimmon';

export default {
  Number: (r) => Parsimmon
    .alt(r.Float, r.Integer)
    .node('Number'),
};
