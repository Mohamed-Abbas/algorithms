class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
Searching 🔎 for a target inside a linked list 🔀 expands on the iterating pattern, 
to check if a value exists in a linked list, 
we compare the current node's value with the target value. If they match, 
we set the found flag. Otherwise, we continue iterating 🔄.
*/

export default function linkedListContains(head, target) {
  let current = head;
  let found = false;

  while (current !== null && found !== true) {
    if (current.value === target) {
      found = true;
    } else {
      current = current.next;
    }
  }

  return found;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListContains(a, "c"); // true
