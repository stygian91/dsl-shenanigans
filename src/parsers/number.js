/**
 * External dependencies:
 */
const Parsimmon = require('parsimmon');

module.exports = {
  Integer: (r) => Parsimmon
		.regex(/\d+/)
		.map(Number)
		.node('Integer'),

  Float: (r) => Parsimmon
		.regex(/\d+\.\d+/)
		.map(Number)
		.node('Float'),

  Number: (r) => Parsimmon
		.alt(r.Float, r.Integer)
		.node('Number'),
};
