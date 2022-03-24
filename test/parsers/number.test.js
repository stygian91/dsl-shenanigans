import Language from "../../src/language";
import { filterOutPosition } from "../utils";

describe("parses numbers", () => {
  test("parses integers", () => {
    const program = '1234';
    const result = Language.Integer.tryParse(program);

    expect(result.name).toEqual('Integer');
    expect(result.value).toEqual(1234);
  });

  test("parses floats", () => {
    const program = '123.45';
    const result = Language.Float.tryParse(program);

    expect(result.name).toEqual('Float');
    expect(result.value).toEqual(123.45);
  });

  test("parses numbers", () => {
    const floatProgram = '1123.05';
    const floatResult = Language.Number.tryParse(floatProgram);

    expect(filterOutPosition(floatResult)).toEqual({
      name: 'Float',
      base: 'Number',
      value: 1123.05,
    });

    const intProgram = '1012';
    const intResult = Language.Number.tryParse(intProgram);
    expect(filterOutPosition(intResult)).toEqual({
      name: 'Integer',
      base: 'Number',
      value: 1012,
    });
  });

  test("parses negative numbers", () => {
    const intProgram = '-142';
    const intResult = Language.Number.tryParse(intProgram);
    expect(filterOutPosition(intResult)).toEqual({
      base: 'Number',
      name: 'Integer',
      value: -142,
    });

    const floatProgram = '-42.314';
    const floatResult = Language.Number.tryParse(floatProgram);
    expect(filterOutPosition(floatResult)).toEqual({
      base: 'Number',
      name: 'Float',
      value: -42.314,
    });
  });
});
