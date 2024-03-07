const mathOperations = require("./calculator");

describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });

  test("multiplying 3 * 4 should return 12", () => {
    expect(mathOperations.product(3, 4)).toBe(12);
  });

  test("subtracting 5 - 2 should return 3", () => {
    expect(mathOperations.diff(5, 2)).toBe(3);
  });
});
