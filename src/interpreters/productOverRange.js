import * as F from "funky-lib";

import overRange from "./overRange";

const productOverRange = (ast) => overRange(1, F.multiply, ast);

export default productOverRange;

