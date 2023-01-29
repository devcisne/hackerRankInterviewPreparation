import { mergeLists, SinglyLinkedList } from "./mergeSortedList";
describe("Test suite for the merge sorted lists code challenge", () => {
  test("merges two lists with one list being empty", () => {
    const list1 = new SinglyLinkedList();
    list1.insertNode(1);
    list1.insertNode(2);
    list1.insertNode(3);

    const list2 = new SinglyLinkedList();

    const mergedList = mergeLists(list1.head, list2.head);

    let current = mergedList;
    let i = 1;
    while (current) {
      expect(current.data).toBe(i);
      current = current.next;
      i++;
    }
  });

  test("merges two lists with second list having larger value", () => {
    const list1 = new SinglyLinkedList();
    list1.insertNode(1);
    list1.insertNode(3);
    list1.insertNode(5);

    const list2 = new SinglyLinkedList();
    list2.insertNode(2);
    list2.insertNode(4);
    list2.insertNode(6);

    const mergedList = mergeLists(list1.head, list2.head);

    let current = mergedList;
    let i = 1;
    while (current) {
      expect(current.data).toBe(i);
      current = current.next;
      i++;
    }
  });
});
