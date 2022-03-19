/**
 * External dependencies:
 */
import Parsimmon from 'parsimmon';

/**
 * Internal dependencies:
 */
import number from './parsers/number.js';

export default Parsimmon.createLanguage({
  ...number,
});
