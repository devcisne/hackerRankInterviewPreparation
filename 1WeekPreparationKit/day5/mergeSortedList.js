const mergeLists = (head1, head2) => {
  let head = new SinglyLinkedList();
  head.data = null;
  let temp = head;

  while (head1 && head2) {
    if (head1.data < head2.data) {
      temp.next = head1;
      head1 = head1.next;
    } else {
      temp.next = head2;
      head2 = head2.next;
    }
    temp = temp.next;
  }

  if (head1) temp.next = head1;
  else if (head2) temp.next = head2;

  return head.next;
};

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

export { mergeLists, SinglyLinkedList };
