import { timeConversion } from "./timeConversion";

describe("Test suite for timeConversion code challenge", () => {
  test("Should return the time string in military format", () => {
    const inputString = "07:05:45PM";
    const inputString2 = "07:05:45AM";
    const inputString3 = "12:05:45AM";

    expect(timeConversion(inputString)).toBe("19:05:45");
    expect(timeConversion(inputString2)).toBe("07:05:45");
    expect(timeConversion(inputString3)).toBe("00:05:45");
  });
});
