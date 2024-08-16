import { analyzeArray } from "../modules/analyzeArray";

describe("analyzeArray function", () => {
  test("correctly analyzes an array of numbers", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("handles an array with a single element", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("handles an empty array", () => {
    expect(analyzeArray([])).toEqual({
      average: NaN,
      min: Infinity,
      max: -Infinity,
      length: 0,
    });
  });

  test("handles an array with negative numbers", () => {
    expect(analyzeArray([-5, -2, -10, 0, 3])).toEqual({
      average: -2.8,
      min: -10,
      max: 3,
      length: 5,
    });
  });

  test("handles an array with repeating numbers", () => {
    expect(analyzeArray([3, 3, 3, 3, 3])).toEqual({
      average: 3,
      min: 3,
      max: 3,
      length: 5,
    });
  });
});
