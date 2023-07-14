class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function getAverage(nums = []) {
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }

  return sum / nums.length;
}

/**
 * Level Averages uses Breadth First Traversal of a Binary Tree.
 */

export default function levelAverages(root) {
  if (root === null) return [];
  const levels = [];
  const queue = [{ node: root, level: 0 }];

  while (queue.length != 0) {
    const { node, level } = queue.shift();

    if (levels[level]) {
      levels[level].push(node.val);
    } else {
      levels.push([node.val]);
    }

    if (node.left !== null) queue.push({ node: node.left, level: level + 1 });
    if (node.right !== null) queue.push({ node: node.right, level: level + 1 });
  }

  return levels.map(getAverage);
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

levelAverages(a); // -> [ 3, 7.5, 1 ]
