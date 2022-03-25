import * as F from "funky-lib";

import overRange from "./overRange";

const sumOverRange = (ast) => overRange(0, F.add, ast);

export default sumOverRange;
