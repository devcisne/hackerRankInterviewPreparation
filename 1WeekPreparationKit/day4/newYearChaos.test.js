import { minimumBribes } from "./newYearChaos";

describe("Test suite for the newYearChaos code challenge", () => {
  test("The function should return the number of bribes or 'Too chaotic' if bribes are more than 2 ", () => {
    const logSpy = jest.spyOn(console, "log");
    const testArray = [1, 2, 3, 5, 4, 6, 7, 8];
    minimumBribes(testArray);
    expect(logSpy).toHaveBeenCalledWith("1");
  });
  test("The function should return the number of bribes or 'Too chaotic' if bribes are more than 2 ", () => {
    const logSpy = jest.spyOn(console, "log");

    const testArray2 = [4, 1, 2, 3];
    minimumBribes(testArray2);

    expect(logSpy).toHaveBeenCalledWith("Too chaotic");
  });
});
