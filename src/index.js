import Language from './language.js';

const program = '(31 + (55.1/2))';
const result = Language.BinaryOperation.tryParse(program);

console.log(result);
