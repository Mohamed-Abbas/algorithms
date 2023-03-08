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

const nodeQ = new Node("Q");
const nodeR = new Node("R");

nodeQ.next = nodeR;

function zipLinkedList(listOneHead, listTwoHead) {
  let tail = listOneHead;
  let currentOne = listOneHead.next;
  let currentTwo = listTwoHead;
  let iteration = 0;

  while (currentOne !== null && currentTwo !== null) {
    if (iteration % 2 === 0) {
      tail.next = currentTwo;
      currentTwo = currentTwo.next;
    } else {
      tail.next = currentOne;
      currentOne = currentOne.next;
    }
    tail = tail.next;
    ++iteration;
  }

  if (currentOne === null) {
    tail.next = currentTwo;
  } else if (currentTwo === null) {
    tail.next = currentOne;
  }

  return listOneHead;
}

function printLinkedList(current) {
  if (current === null) return;
  console.log(current.value);
  printLinkedList(current.next);
}

const list = zipLinkedList(nodeA, nodeQ);
console.log(printLinkedList(list));
