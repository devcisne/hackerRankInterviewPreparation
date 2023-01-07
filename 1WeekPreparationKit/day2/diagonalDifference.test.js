import { diagonalDifference } from "./diagonalDifference";

describe("Test suite for diagonalDifference code challenge", () => {
  test("function should return the absolute difference of the diagonal sums of a square matrix array", () => {
    const testArr = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];
    expect(diagonalDifference(testArr)).toEqual(15);
  });
});
