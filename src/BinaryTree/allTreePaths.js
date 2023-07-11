class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Time: O(n^2)
 * Space: O(n)
 */

export default function allTreePaths(root) {
  //Substitutes for empty tree to make sue that the return value is of the same type as the return value of the recursive calls.
  if (root === null) return [];
  // Base case: leaf node.
  if (root.left === null && root.right === null) return [[root.val]];

  const paths = [];

  // Build paths from left by adding the current node value to the beginning of each path.
  const leftPaths = allTreePaths(root.left);
  for (let subPath of leftPaths) {
    paths.push([root.val, ...subPath]);
  }

  // Build paths from right by adding the current node value to the beginning of each path.
  const rightPaths = allTreePaths(root.right);
  for (let subPath of rightPaths) {
    paths.push([root.val, ...subPath]);
  }

  return paths;
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

allTreePaths(a); // ->
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e' ],
//   [ 'a', 'c', 'f' ]
//
