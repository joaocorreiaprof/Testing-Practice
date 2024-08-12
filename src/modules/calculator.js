class Calculator {
  sum(a, b) {
    return a + b;
  }
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  multiply(a, b) {
    return a * b;
  }
}
export { Calculator };
