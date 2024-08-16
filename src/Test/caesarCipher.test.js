import { caesarCipher } from "../modules/caesarCipher";

describe("Caesar cipher", () => {
  test("shift string", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("negative shift", () => {
    expect(caesarCipher("abc", -3)).toBe("xyz");
  });

  test("zero shift", () => {
    expect(caesarCipher("NoChange", 0)).toBe("NoChange");
  });

  test("large shift value", () => {
    expect(caesarCipher("abc", 29)).toBe("def");
  });
});
