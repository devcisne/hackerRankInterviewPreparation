import { superDigit } from "./superDigit";

describe("Test suite for the superDigit code challenge", () => {
  test("The function should return an integer value representing the 'superDigit' as defined in the challenge instructions", () => {
    const numString = "9875",
      k = 4;
    const numString2 = "12345",
      k2 = 1000;

    expect(superDigit(numString, k)).toEqual(8);
    expect(superDigit(numString2, k2)).toEqual(6);
  });
});
