class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const nodeOne = new Node(1);
const nodeTwo = new Node(2);
const nodeThree = new Node(3);
const nodeFour = new Node(4);
const nodeFive = new Node(5);
const nodeSix = new Node(6);

nodeOne.left = nodeTwo;

nodeTwo.left = nodeThree;
nodeTwo.right = nodeFour;

nodeThree.left = nodeFive;

nodeFour.right = nodeSix;

function getHeight(root) {
  if (root === null) return -1;

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

function getDiameter(root) {
  if (root === null) return 0;

  const d1 = getHeight(root.left) + 1;
  const d2 = getHeight(root.right) + 1;

  console.log(d1 + d2);
}

export default function diameterOfBinaryTree(root) {
  return getDiameter(root);
}

console.log(diameterOfBinaryTree(nodeTwo));
