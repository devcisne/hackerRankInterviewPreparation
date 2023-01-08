import { gridChallenge } from "./gridChallenge";

describe("Test suite for gridchallenge code challenge", () => {
  test("The function should return YES if the rearranged grid's columns are ordered alphabetically or NO if not", () => {
    const testArray = ["cba", "aed", "efg"];
    const testArray2 = ["eabcd", "fghij", "olkmn", "trpqs", "xywuv"];
    const testArray3 = ["hgi", "def", "abc"];
    expect(gridChallenge(testArray)).toEqual("YES");
    expect(gridChallenge(testArray2)).toEqual("YES");
    expect(gridChallenge(testArray)).toEqual("YES");
    expect(gridChallenge(testArray3)).toEqual("NO");
  });
});
