class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 🔀 Expanding on the iterating pattern, we can now append the current node's value to an array.

export default function linkedListToArray(head) {
  let current = head;
  const result = [];

  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }

  return result;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListToArray(a); // -> [ 'a', 'b', 'c', 'd' ]
