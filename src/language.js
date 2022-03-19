/**
 * External dependencies:
 */
const Parsimmon = require('parsimmon');

module.exports = Parsimmon.createLanguage({
  ...require('./parsers/number')
});
