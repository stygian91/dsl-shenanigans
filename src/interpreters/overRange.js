import * as F from 'funky-lib';

import binaryOperation from './binaryOperation';
import InterpreterError from './interpreterError';

const overRange = (initialValue, accumulate, ast) => {
  const context = {};

  context.variables = F.pipe(
    F.path('value.variables.value'),
    F.map(
      (entry) => ([
        entry.identifier,
        entry.value.value,
      ]),
    ),
    Object.fromEntries
  )(ast);

  const range = ast.value.range.value;
  const from = range.from.value;
  const to = range.to.value;
  const rangeId = range.identifier;

  if (to < from) {
    throw new InterpreterError('Range upper bound must be >= than the lower bound.')
  }

  let accumulator = initialValue;
  for (let i = from; i <= to; i++) {
    context.variables[rangeId] = i;
    const iterationResult = binaryOperation(context, ast.value.operation);
    accumulator = accumulate(accumulator, iterationResult);
  }

  return accumulator;
};

export default overRange;
