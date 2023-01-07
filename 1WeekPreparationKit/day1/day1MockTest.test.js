import { findMedian } from "./day1MockTest";
describe("Test suite for the day 1 Mock test", () => {
  test("Should return the median of an odd number of integers array", () => {
    const inputArray = [5, 3, 1, 4, 2];
    expect(findMedian(inputArray)).toBe(3);
  });
});
