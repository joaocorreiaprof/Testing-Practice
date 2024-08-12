import { Calculator } from "../modules/calculator";

describe("Calculator operations", () => {
  let calculator;

  // Set up a new Calculator instance before each test
  beforeEach(() => {
    calculator = new Calculator();
  });

  test("sums two given numbers", () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });

  test("divides two given numbers", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("throws error when dividing by zero", () => {
    expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by zero");
  });

  test("multiplies two given numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
});
