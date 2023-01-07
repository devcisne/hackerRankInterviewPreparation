import { miniMaxSum } from "./miniMaxSum";

describe("Test suite for miniMaxSum code challenge", () => {
  test("function should log to the console the min and max sums ", () => {
    const testArray = [1, 3, 5, 7, 9];
    const logSpy = jest.spyOn(console, "log");
    miniMaxSum(testArray);
    expect(logSpy).toHaveBeenCalledWith("16 24");
  });
});
