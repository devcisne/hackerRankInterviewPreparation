import { caesarCipher } from "./caesarCypher";

describe("Test suite for caesarCipher code challenge", () => {
  test("function should return the encrypted string", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 3)).toBe(
      "defghijklmnopqrstuvwxyzabc"
    );
  });
});
