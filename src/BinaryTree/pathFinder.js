class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Given a binary tree and a target value, return an array with the path from the root to the target.
 * Time Complexity: O(n).
 * Space Complexity: O(n).
 */

export default function pathFinder(root, target) {
  if (root === null) return null; // Default value for an empty node.
  if (root.val === target) return [target];

  // Search for target in left and right subtrees.
  const leftPath = pathFinder(root.left, target);
  const rightPath = pathFinder(root.right, target);

  // If target is found in  left, add the current node value to the path.
  if (leftPath) {
    return [root.val, ...leftPath];
  }

  // If target is found in right, add the current node value to the path.
  if (rightPath) {
    return [root.val, ...rightPath];
  }

  // If target is not found in left or right, return null.
  return null;
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

pathFinder(a, "e"); // -> [ 'a', 'b', 'e' ]
