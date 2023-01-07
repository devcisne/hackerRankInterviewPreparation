import { plusMinus } from "./plusMinus";

describe("Test suite for plusMinus code challenge", () => {
  test("function should be called without error ", () => {
    const testArray = [1, 1, 0, -1, -1];
    const logSpy = jest.spyOn(console, "log");
    plusMinus(testArray);
    expect(logSpy).toHaveBeenCalledWith((2 / 5).toFixed(6));
    expect(logSpy).toHaveBeenCalledWith((1 / 5).toFixed(6));
  });
});
