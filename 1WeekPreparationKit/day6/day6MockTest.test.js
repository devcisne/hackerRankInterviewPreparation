import { bfs } from "./day6MockTest";

describe("Test suite for the day 6 mock exam", () => {
  it("should return the correct distances from start node for a simple graph", () => {
    const n = 4;
    const m = 4;
    const edges = [
      [1, 2],
      [1, 3],
      [2, 3],
      [3, 4],
    ];
    const s = 1;
    const expected = [6, 6, 12];

    expect(bfs(n, m, edges, s)).toEqual(expected);
  });
  it("should return the correct distances from start node for a complex graph", () => {
    const n = 7;
    const m = 6;
    const edges = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ];
    const s = 1;
    const expected = [6, 12, 18, 24, 30, 36];

    expect(bfs(n, m, edges, s)).toEqual(expected);
  });

  it("should return the correct distances from start node for an unreachable node", () => {
    const n = 4;
    const m = 2;
    const edges = [
      [1, 2],
      [2, 3],
    ];
    const s = 4;
    const expected = [-1, -1, -1];

    expect(bfs(n, m, edges, s)).toEqual(expected);
  });

  test("should return the correct distances from start node for a disconnected graph", () => {
    const n = 4;
    const m = 2;
    const edges = [
      [1, 2],
      [3, 4],
    ];
    const s = 1;
    const expected = [6, -1, -1];
    expect(bfs(n, m, edges, s)).toEqual(expected);
  });

  it("should return the correct distances from start node for a complete graph", () => {
    const n = 5;
    const m = 10;
    const edges = [
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 4],
      [2, 5],
      [3, 4],
      [3, 5],
      [4, 5],
    ];
    const s = 1;

    const result = bfs(n, m, edges, s);
    expect(result).toEqual([6, 6, 6, 6]);
  });
});
