class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Given a binary tree, return an array with the values of each level.
 * Time Complexity: O(n).
 * Space Complexity: O(n).
 * The idea is to add extra information to the queue, the level number.
 */

export default function treeLevels(root) {
  if (root === null) return [];

  const levels = [];
  const queue = [{ node: root, levelNum: 0 }];

  while (queue.length !== 0) {
    const { node, levelNum } = queue.shift();

    if (!levels[levelNum]) {
      levels[levelNum] = [node.val]; // Create a new level.
    } else {
      levels[levelNum].push(node.val); // Add to an existing level.
    }

    if (node.left !== null)
      queue.push({ node: node.left, levelNum: levelNum + 1 });
    if (node.right !== null)
      queue.push({ node: node.right, levelNum: levelNum + 1 });
  }

  return levels;
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

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
