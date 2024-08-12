import { reverseString } from "../modules/reserveString";

describe("reverseString function", () => {
  test("reverses a simple string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverses a string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test("reverses a single character string", () => {
    expect(reverseString("a")).toBe("a");
  });

  test("reverses an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("reverses a string with special characters", () => {
    expect(reverseString("123!@#")).toBe("#@!321");
  });
});
