/**
 * External dependencies:
 */
import Parsimmon from 'parsimmon';
import * as F from 'funky-lib';

export default {
  Number: (r) => Parsimmon
    .alt(r.Float, r.Integer)
    .map(F.assoc('base', 'Number')),
};
