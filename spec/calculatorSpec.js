const { calculateSimpleInterest, calculateCompoundInterest } = require("../src/script.js");
describe("Interest Rate Calculator", function () {
  it("should calculate simple interest correctly", function () {
    const result = calculateSimpleInterest("1000", "5", "3");
    expect(result.interest).toBe("150.00");
    expect(result.total).toBe("1150.00");
  });
  it("should calculate compound interest correctly", function () {
    const result = calculateCompoundInterest("1000", "10", "2");
    expect(result.interest).toBe("210.00");
    expect(result.total).toBe("1210.00");
  });
});
