class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
 * Doing breadth first traversal of a binary tree while searching for the bottom right value.
 * Time Complexity: O(n).
 * Space Complexity: O(n).
 * The idea is to go level by level, and always keep the most right node by adding the left node first and then the right node.
 * The last node that we add to the queue will be the most right node.
 */

export default function bottomRightValue(root) {
  const queue = [root];
  let mostRightNode = null;

  while (queue.length !== 0) {
    const current = queue.shift();
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
    mostRightNode = current;
  }

  return mostRightNode.val;
}

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     / \
//    -2  6

bottomRightValue(a); // -> 6
console.log(bottomRightValue(a));
