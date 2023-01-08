import { towerBreakers } from "./towerBreakers";

describe("Test suite for towerBreakers code challenge", () => {
  test("function should return the winner of the game according to the logic described in the challenge instructions ", () => {
    expect(towerBreakers(2, 2)).toBe(2);
    expect(towerBreakers(1, 4)).toBe(1);
  });
});
