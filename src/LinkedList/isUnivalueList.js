class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// A linked list is univalue if all of its nodes have the same value.
export default function isUnivalueList(head) {
  if (head === null) return true;
  if (prev && head.val !== prev.val) return false;

  return isUnivalueList(head.next, head);
}

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

isUnivalueList(a);
