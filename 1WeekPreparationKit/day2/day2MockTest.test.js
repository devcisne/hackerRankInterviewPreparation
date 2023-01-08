import { flippingMatrix } from "./day2MockTest";

describe("Test suite for the day 2 Mock test code challenge", () => {
  test("should return the maximum sum of the elements in the matrix's upper left quadrant", () => {
    const inputMatrix = [
      [112, 42, 83, 119],
      [56, 125, 56, 49],
      [15, 78, 101, 43],
      [62, 98, 114, 108],
    ];
    expect(flippingMatrix(inputMatrix)).toBe(414);
  });
});
