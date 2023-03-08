class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

let prev = null;
let next = null;

function reverseLinkedList(current) {
  if (current === null) return;
  next = current.next;
  current.next = prev;
  prev = current;
  reverseLinkedList(next);
}

function printLinkedList(current) {
  if (current === null) return;
  console.log(current.value);
  printLinkedList(current.next);
}

console.log(reverseLinkedList(nodeA));
console.log(printLinkedList(nodeD));
