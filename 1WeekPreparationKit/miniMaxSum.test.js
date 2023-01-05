import { miniMaxSum } from "./miniMaxSum";

describe("Test suite for miniMaxSum code challenge", () => {
  test("function should be called without error ", () => {
    const testArray = [1, 3, 5, 7, 9];
    const logSpy = jest.spyOn(console, "log");
    miniMaxSum(testArray);
    expect(logSpy).toHaveBeenCalledWith("16 24");
  });
});
