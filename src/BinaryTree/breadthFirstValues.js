class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 *  Breadth First Traversal of a Binary Tree (Level Order Traversal).
 *  Time Complexity: O(n) depends on queue implementation.
 *  Space Complexity: O(n)
 */

export default function breadthFirstValues(root) {
  if (!root) return [];
  const queue = [root]; // Using an array as a queue by leveraging push and shift methods.
  const values = [];

  while (queue.length > 0) {
    const current = queue.shift(); // remove first element from queue.
    values.push(current.val);

    if (current.left) queue.push(current.left); // add left child to the end of queue.
    if (current.right) queue.push(current.right); // add right child to the end of queue.
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

breadthFirstValues(a);
// ["a", "b", "c", "d", "e", "f"]
