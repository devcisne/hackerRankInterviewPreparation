import { lonelyInteger } from "./lonelyInteger";

describe("Test suite for lonelyInteger code challenge", () => {
  test("function should return the unique integer in the given array", () => {
    const testArr = [1, 2, 3, 4, 3, 2, 1];
    const testArr2 = [1, 1, 2];
    const testArr3 = [1];

    expect(lonelyInteger(testArr)).toBe(4);
    expect(lonelyInteger(testArr2)).toBe(2);
    expect(lonelyInteger(testArr3)).toBe(1);
  });
});
