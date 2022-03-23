/**
 * Internal dependencies:
 */
import number from "./number";
import binaryOperation from "./binaryOperation";
import InterpreterError from "./interpreterError";

const term = (astNode) => {
  switch (astNode.value.name) {
    case 'BinaryOperation':
      return binaryOperation(astNode.value);

    case 'Identifier':
      return astNode;

    case 'Number':
      return number(astNode.value);

    default:
      throw new InterpreterError('Unknown term type.');
  }
};

export default term;
