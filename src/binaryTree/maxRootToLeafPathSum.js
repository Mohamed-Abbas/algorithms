class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const nodeOne = new Node(5);
const nodeTwo = new Node(11);
const nodeThree = new Node(3);
const nodeFour = new Node(4);
const nodeFive = new Node(15);
const nodeSix = new Node(1);

nodeOne.left = nodeTwo;
nodeOne.right = nodeThree;
nodeTwo.left = nodeFour;
nodeTwo.right = nodeFive;
nodeFive.right = nodeSix;

export default function maxRootToLeafPathSum(root) {
  if (root === null) return -Infinity;
  if (!root.left && !root.right) return root.val;

  const leftTreeMaxSum = maxRootToLeafPathSum(root.left);
  const rightTreeMaxSum = maxRootToLeafPathSum(root.right);

  return root.val + Math.max(leftTreeMaxSum, rightTreeMaxSum);
}

console.log(maxRootToLeafPathSum(nodeOne));
