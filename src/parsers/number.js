/**
 * External dependencies:
 */
const Parsimmon = require('parsimmon');

module.exports = {
  Integer: () => Parsimmon
    .regex(/\d+/)
    .map(Number)
    .node('Integer'),

  Float: () => Parsimmon
    .regex(/\d+\.\d+/)
    .map(Number)
    .node('Float'),

  Number: (r) => Parsimmon
    .alt(r.Float, r.Integer)
    .node('Number'),
};
