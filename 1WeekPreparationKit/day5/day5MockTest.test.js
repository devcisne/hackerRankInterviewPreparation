import { pairs } from "./day5MockTest";
describe("Test suite for the day 5 Mock test challenge", () => {
  test("returns correct number of pairs with difference equal to k", () => {
    const arr = [1, 5, 3, 4, 2];
    const k = 2;
    expect(pairs(k, arr)).toBe(3);
  });

  test("returns 0 when there are no pairs with difference equal to k", () => {
    const arr = [1, 5, 3, 4, 2];
    const k = 6;
    expect(pairs(k, arr)).toBe(0);
  });

  test("returns correct number of pairs for an array with duplicate values", () => {
    const arr = [1, 5, 3, 4, 2, 5, 2];
    const k = 2;
    expect(pairs(k, arr)).toBe(4);
  });

  test("returns 0 for an empty array", () => {
    const arr = [];
    const k = 2;
    expect(pairs(k, arr)).toBe(0);
  });
});
