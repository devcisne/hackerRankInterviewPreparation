import { cookies } from "./jesseCookies";
describe("Test suite for the jessie & cookies code challenge", () => {
  test("cookies function test cases", () => {
    const k = 10;
    const A = [2, 3, 5];
    expect(cookies(k, A)).toBe(2);

    const k2 = 20;
    const A2 = [0, 0, 0, 5];
    expect(cookies(k2, A2)).toBe(-1);

    const k3 = 30;
    const A3 = [1, 2, 3, 4];
    expect(cookies(k3, A3)).toBe(4);

    const k4 = 50;
    const A4 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(cookies(k4, A4)).toBe(7);
  });
});
