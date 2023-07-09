class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/* Given a binary tree and a target value, return the number of times the target is found in the tree.
 * Time Complexity: O(n).
 * Space Complexity: O(n).
 */
const treeValueCount = (root, target) => {
  if (root === null) return 0;
  // Count the number of times the target is found in the left and right subtrees.
  const count =
    treeValueCount(root.left, target) + treeValueCount(root.right, target);
  // If the current node value is equal to the target, add 1 to the count.
  return root.val === target ? 1 + count : count;
};

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

treeValueCount(a, 6); // -> 3
