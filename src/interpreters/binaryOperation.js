/**
 * Internal dependencies:
 */
import term from "./term";
import arithmeticOperator from "./arithmeticOperator";

const binaryOperation = (context, astNode) => {
  const left = term(context, astNode.value.left);
  const right = term(context, astNode.value.right);
  const operation = arithmeticOperator(context, astNode.value.operator);

  return operation(right, left);
};

export default binaryOperation;
