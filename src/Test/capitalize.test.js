import { capitalize } from "../modules/capitalize";

test("capitalizes the first character of a lowercase string", () => {
  expect(capitalize("wello")).toBe("Wello");
});

test("handles single-character strings", () => {
  expect(capitalize("a")).toBe("A");
  expect(capitalize("A")).toBe("A");
});

test("returns an empty string when input is empty", () => {
  expect(capitalize("")).toBe("");
});

test("does not change the first character if it is already capitalized", () => {
  expect(capitalize("Wello")).toBe("Wello");
});

test("handles strings that start with non-alphabetic characters", () => {
  expect(capitalize("1ello")).toBe("1ello");
  expect(capitalize(" wello")).toBe(" wello");
});

test("only capitalizes the first character in multi-word strings", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("does not affect strings that are already fully capitalized", () => {
  expect(capitalize("HELLO")).toBe("HELLO");
});
