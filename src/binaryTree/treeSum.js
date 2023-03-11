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

nodeOne.left = nodeTwo;
nodeOne.right = nodeThree;
nodeTwo.left = nodeFour;
nodeTwo.right = nodeFive;

export default function treeSum(root) {
  if (root === null) return 0;
  const sum = treeSum(root.left) + treeSum(root.right);

  return sum + root.val;
}

console.log(treeSum(nodeOne));
