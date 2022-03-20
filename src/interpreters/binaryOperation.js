/**
 * Internal dependencies:
 */
import term from "./term";
import arithmeticOperator from "./arithmeticOperator";

const binaryOperation = (astNode) => {
  const left = term(astNode.value.left);
  const right = term(astNode.value.right);
  const operation = arithmeticOperator(astNode.value.operator);

  return operation(right, left);
};

export default binaryOperation;
