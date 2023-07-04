class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Doing depth first traversal of a binary tree while searching for the maximum path sum.
 * Time Complexity: O(n).
 * Space Complexity: O(n).
 */

export default function maxPathSum() {
  if (root === null) return -Infinity; // Default value for an empty node, so that we can use Math.max later.
  if (root.left === null && root.right === null) return root.val; // Base case, leaf node, return the value.

  // Add the current node value to the maximum value of the left and right subtrees to maximize the path sum.
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
}

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2

maxPathSum(a); // -> -8
