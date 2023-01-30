import { processData } from "./simpleTextEditor";
describe("Test suite for the simple text editor code challenge", () => {
  it("should append a string to the end of S", () => {
    const input = "1\n1 hello";
    const result = processData(input);
    expect(result).toBe("hello");
  });

  it("should delete the last k characters of S", () => {
    const input = "2\n1 hello\n2 3";
    const result = processData(input);
    expect(result).toBe("he");
  });

  it("should print the kth index character of S", () => {
    const input = "1\n1 hello\n3 2";
    const spy = jest.spyOn(console, "log");
    processData(input);
    expect(spy).toHaveBeenCalledWith("e");
    spy.mockRestore();
  });

  it("should undo the last operation of type 1 or 2", () => {
    const input = "1\n1 hello\n2 3\n4";
    const result = processData(input);
    expect(result).toBe("hello");
  });
});
