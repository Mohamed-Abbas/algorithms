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

nodeOne.left = nodeTwo;
nodeOne.right = nodeThree;
nodeTwo.left = nodeFour;
nodeTwo.right = nodeFive;

export default function treeMinValue(root) {
  if (root === null) return Infinity;
  const leftTreeMin = treeMinValue(root.left);
  const rightTreeMin = treeMinValue(root.right);
  return Math.min(root.val, leftTreeMin, rightTreeMin);
}

console.log(treeMinValue(nodeOne));
