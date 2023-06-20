class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
Unlock the power of the "runner" pattern! 🏃‍♀️🏃‍♂️. 🔀 Extending the iterating pattern, we employ the "runner" pattern by utilizing two pointers that traverse the linked list at different speeds 🐢🐇.
By accessing a present and past nodes simultaneously, we can rewire the list by changing the next pointer of the current node to point to the previous node. 
*/

export default function reverseLinkedList(head) {
  let current = head;
  let prev = null;

  while (current !== null) {
    // Since a node does not have reference to the previous node, we must store its previous value before overwriting it. We also need to store a reference to the next node before changing the reference of the current node.
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

reverseLinkedList(a); // f -> e -> d -> c -> b -> a
