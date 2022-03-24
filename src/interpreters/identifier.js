import * as F from 'funky-lib'

const identifier = (context, ast) => {
  const name = F.prop('value', ast);
  return F.path(['variables', name], context);
};

export default identifier;
