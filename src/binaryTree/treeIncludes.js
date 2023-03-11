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

export default function treeIncludes(root, val) {
  if (root === null) return false;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === val) return true;
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  return false;
}

function treeIncludesRec(root, val) {
  if (root === null) return false;
  if (root.val === val) return true;

  return treeIncludesRec(root.left, val) || treeIncludesRec(root.right, val);
}

console.log(treeIncludes(nodeA, "A"));
console.log(treeIncludesRec(nodeA, "F"));
