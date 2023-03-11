class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
const nodeF = new Node("F");

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.right = nodeF;

export default function depthFirstValues(root) {
  const list = [];
  const stack = [root];

  if (root === null) return [];

  while (stack.length > 0) {
    const current = stack.pop();
    list.push(current.val);
    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return list;
}

function depthFirstValuesRec(root) {
  if (root === null) return [];
  const leftValues = depthFirstValuesRec(root.left);
  const rightValues = depthFirstValuesRec(root.right);
  return [root.val, ...leftValues, ...rightValues];
}

console.log(depthFirstValues(nodeA));
console.log(depthFirstValuesRec(nodeA));
