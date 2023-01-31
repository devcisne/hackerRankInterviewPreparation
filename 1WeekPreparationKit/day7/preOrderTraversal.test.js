import { preOrder } from "./preOrderTraversal";
var Tree = function () {
  this.root = null;
};

Tree.prototype.insert = function (node, data) {
  if (node == null) {
    node = new Node(data);
  } else if (data < node.data) {
    node.left = this.insert(node.left, data);
  } else {
    node.right = this.insert(node.right, data);
  }

  return node;
};

var Node = function (data) {
  this.data = data;
  this.left = null;
  this.right = null;
};

describe("Test suite for the preOrder traversal code challenge", () => {
  it("should traverse the binary tree in pre-order and print the values as a single line of space-separated values", () => {
    var tree = new Tree();
    var n = 6;
    var m = "1 2 5 3 6 4".split(" ").map(Number);
    for (var i = 0; i < n; i++) {
      tree.root = tree.insert(tree.root, m[i]);
    }

    let result = "";
    console.log = jest.fn((output) => (result += output));

    preOrder(tree.root);

    expect(result).toBe("1 2 5 3 4 6 ");
  });
});
