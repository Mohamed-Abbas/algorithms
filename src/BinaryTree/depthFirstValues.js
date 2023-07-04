class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Depth First Traversal of a Binary Tree. (Pre-order Traversal)
 * Time Complexity: O(n) depends on stack implementation.
 * Space Complexity: O(n)
 */

export default function depthFirstValues(root) {
  if (!root) return [];
  const stack = [root]; // Using an array as a stack by leveraging push and pop methods.
  const values = [];

  while (stack.length > 0) {
    const current = stack.pop(); // remove last element from array.

    values.push(current.val);

    if (current.right) stack.push(current.right); // add right child to the end of array.
    if (current.left) stack.push(current.left); // add left child to the end of array.
  }

  return values;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a);
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
