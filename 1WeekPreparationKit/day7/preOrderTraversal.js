/**
 * Complete the preOrder function in the editor below, which has 1 parameter: a pointer to the root of a binary tree.
 * It must print the values in the tree's preorder traversal as a single line of space-separated values.
 * 
 * 
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
 */

const preOrder = (root) => {
  console.log(root.data.toString() + " ");
  if (root.left) {
    preOrder(root.left);
  }
  if (root.right) {
    preOrder(root.right);
  }
};

export { preOrder };
