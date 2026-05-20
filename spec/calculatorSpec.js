const { calculateSimpleInterest, calculateCompoundInterest } = require("../src/script.js");

describe("calculateSimpleInterest", function () {
  it("calculates correct interest and total for standard inputs", function () {
    const result = calculateSimpleInterest(1000, 5, 2);
    expect(result.interest).toBe("100.00");
    expect(result.total).toBe("1100.00");
  });
});

describe("calculateCompoundInterest", function () {
  it("calculates correct interest and total for standard inputs", function () {
    const result = calculateCompoundInterest(1000, 10, 2);
    expect(result.interest).toBe("210.00");
    expect(result.total).toBe("1210.00");
  });
});
