class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Using Depth First Traversal to verify if a target value is in a Binary Tree.
 * Time Complexity: O(n).
 * Space Complexity: O(n).
 */

export default function treeIncludesRecursive(root, target) {
  if (root === null) return false;

  // If current node is the target, return true. otherwise, recursively check left and right subtrees.
  return (
    root.val === target ||
    treeIncludes(root.left, target) ||
    treeIncludes(root.right, target)
  );
}

export function treeIncludes(root, target) {
  if (root === null) return false;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.val === target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
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

treeIncludesRecursive(a, "e"); // -> true
treeIncludes(a, "e"); // -> true
