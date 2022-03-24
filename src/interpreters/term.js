/**
 * Internal dependencies:
 */
import number from "./number";
import binaryOperation from "./binaryOperation";
import InterpreterError from "./interpreterError";
import identifier from "./identifier";

const term = (context, astNode) => {
  switch (astNode.value.name) {
    case 'BinaryOperation':
      return binaryOperation(context, astNode.value);

    case 'Identifier':
      return identifier(context, astNode.value);

    case 'Integer':
      return number(context, astNode.value);

    case 'Float':
      return number(context, astNode.value);

    default:
      throw new InterpreterError('Unknown term type.');
  }
};

export default term;
