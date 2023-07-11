class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export default function getTreeHeight(root) {
  if (root === null) return -1;

  const rightTreeHeight = getTreeHeight(root.right);
  const leftTreeHeight = getTreeHeight(root.left);
  return Math.max(rightTreeHeight, leftTreeHeight) + 1;
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

getTreeHeight(a); // -> 2
