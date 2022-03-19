import Language from "../../src/language";

describe("parses multiplication", () => {
  test("multiplies 2 numbers", () => {
    const program = '12*5.3';
    const result = Language.Multiply.tryParse(program);

    expect(result.name).toEqual('Multiply');
    expect(result.value.left.value.name).toEqual('Integer');
    expect(result.value.right.value.name).toEqual('Float');
    expect(result.value.left.value.value).toEqual(12);
    expect(result.value.right.value.value).toEqual(5.3);
  });
});
