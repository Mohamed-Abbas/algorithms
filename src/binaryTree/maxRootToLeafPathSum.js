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
nodeTwo.left = nodeFour;

export default function maxRootToLeafPathSum(root) {
  if (root === null) return -1;

  const s = maxRootToLeafPathSum(root.left);
  const x = maxRootToLeafPathSum(root.right);

  return Math.max(s, x) + 1;
}

console.log(maxRootToLeafPathSum(nodeOne));
