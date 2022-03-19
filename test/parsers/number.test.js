import Language from "../../src/language";

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
    expect(floatResult.name).toEqual('Number')
    expect(floatResult.value.name).toEqual('Float');
    expect(floatResult.value.value).toEqual(1123.05);

    const intProgram = '1012';
    const intResult = Language.Number.tryParse(intProgram);
    expect(intResult.name).toEqual('Number')
    expect(intResult.value.name).toEqual('Integer');
    expect(intResult.value.value).toEqual(1012);
  });
});
