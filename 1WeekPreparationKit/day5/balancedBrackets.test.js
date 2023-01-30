import { isBalanced } from "./balancedBrackets";

describe("Test suite for the balanced brackets code challenge", () => {
  it("returns YES for balanced brackets", () => {
    expect(isBalanced("{[()]}")).toBe("YES");
    expect(isBalanced("{}[]()")).toBe("YES");
    expect(isBalanced("[{()}]")).toBe("YES");
  });

  it("returns NO for unbalanced brackets", () => {
    expect(isBalanced("{[(])}")).toBe("NO");
    expect(isBalanced("{}[(])")).toBe("NO");
    expect(isBalanced("[{()}(]")).toBe("NO");
  });

  it("returns YES for empty input", () => {
    expect(isBalanced("")).toBe("YES");
  });
});
