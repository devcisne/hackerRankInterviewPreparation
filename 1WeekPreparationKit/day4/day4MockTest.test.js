import { truckTour } from "./day4MockTest";

describe("truckTour", () => {
  test("returns the starting point of the tour that allows the truck to complete the circle", () => {
    const petrolpumps1 = [
      [3, 4],
      [6, 5],
      [7, 3],
      [4, 5],
    ];
    expect(truckTour(petrolpumps1)).toBe(1);

    const petrolpumps2 = [
      [4, 6],
      [3, 7],
      [6, 4],
      [5, 5],
    ];
    expect(truckTour(petrolpumps2)).toBe(2);

    const petrolpumps3 = [
      [4, 3],
      [6, 2],
      [5, 5],
      [7, 3],
    ];
    expect(truckTour(petrolpumps3)).toBe(0);
  });
});
