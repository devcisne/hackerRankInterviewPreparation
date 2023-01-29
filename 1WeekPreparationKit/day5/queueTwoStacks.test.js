import { processData, Queue } from "./queueTwoStacks";

describe("Test suite for the queue using two stacks code challenge", () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  test("enqueues elements correctly", () => {
    processData("3\n1 1\n1 2\n1 3\n", queue);
    expect(queue.stackOne).toEqual([1, 2, 3]);
  });

  test("dequeues elements correctly", () => {
    processData("3\n1 1\n1 2\n2\n", queue);
    queue.shiftElements();
    expect(queue.stackTwo).toEqual([2]);
  });
  test("prints front element correctly", () => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    processData("3\n1 1\n1 2\n3\n", queue);
    expect(console.log).toHaveBeenCalledWith(1);
  });
});
