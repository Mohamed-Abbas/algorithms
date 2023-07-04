class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Tree Sum uses Depth First Traversal of a Binary Tree. (Pre-order Traversal)
 * Time Complexity: O(n) depends on stack implementation.
 * Space Complexity: O(n)
 */

export default function treeSum(root) {
  if (root === null) return 0;
  const stack = [root];
  let sum = 0;

  // Notice the pattern while we do a pre-order traversal we also perform an operation.
  while (stack.length > 0) {
    const current = stack.pop();

    sum += current.val;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return sum;
}

export function treeSumRecursive(root) {
  // The sum of an empty tree is 0.
  if (root === null) return 0;
  return root.val + treeSumRecursive(root.left) + treeSumRecursive(root.right);
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

treeSum(a); // -> 21
treeSumRecursive(a);
