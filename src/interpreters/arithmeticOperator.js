/**
 * External dependencies:
 */
import * as F from 'funky-lib';

/**
 * Internal dependencies:
 */
import InterpreterError from './interpreterError';

const arithmeticOperator = (astNode) => {
  switch (astNode.value.name) {
    case 'Plus':
      return F.add;

    case 'Minus':
      return F.subtract;

    case 'Asterisk':
      return F.multiply;

    case 'Slash':
      return F.divide;

    default:
      throw new InterpreterError('Unknown arithmetic operator');
  }
};

export default arithmeticOperator;
