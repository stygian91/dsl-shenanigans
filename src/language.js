/**
 * External dependencies:
 */
import Parsimmon from 'parsimmon';

/**
 * Internal dependencies:
 */
import number from './parsers/number.js';
import arithmetic from './parsers/arithmetic.js';
import terminals from './parsers/terminals.js';

export default Parsimmon.createLanguage({
  ...terminals,
  ...number,
  ...arithmetic,
});
