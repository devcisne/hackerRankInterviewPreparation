import { palindromeIndex } from "./day3MockTest";

describe("Test suite for the day 3 Mock test code challenge", () => {
  test("should return the index of the character to be removed to make the string palindrom or -1", () => {
    const testString = "aaab";
    const testString2 = "baa";
    const testString3 = "aaa";
    expect(palindromeIndex(testString)).toBe(3);
    expect(palindromeIndex(testString2)).toBe(0);
    expect(palindromeIndex(testString3)).toBe(-1);
  });
});
