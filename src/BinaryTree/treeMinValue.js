class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Doing depth first traversal of a binary tree while searching for the minimum value.
 * Time Complexity: O(n).
 * Space Complexity: O(n).
 */

export default function treeMinValueRecursive(root) {
  // Default value for an empty node.
  if (root === null) return Infinity;

  // Compare the current node value with the minimum value of the left and right subtrees.
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
}

/**
 * Doing breadth first traversal of a binary tree while searching for the minimum value.
 * Time Complexity: O(n). depends on queue implementation.
 * Space Complexity: O(n).
 */

export function treeMinValue(root) {
  const queue = [root];
  let min = Infinity;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.val < min) min = current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return min;
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeMinValueRecursive(a); // -> -2
treeMinValue(a); // -> -2
