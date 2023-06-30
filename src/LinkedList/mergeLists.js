class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Merge two sorted linked lists and return it as a sorted list,
 * by create a dummy node that points to the head of the merged list
 * and tail points to the last node in the merged list, then
 * building the merged list by pointing tail.next to the smaller of the two nodes.
 * Continue until one of the lists is exhausted.
 * Finally, append the remaining elements of the list that hasn't been exhausted to the merged list.
 */
export default function mergeLists(head1, head2) {
  let current1 = head1;
  let current2 = head2;
  const dummyNode = new Node(null);
  let tail = dummyNode;

  while (current1 !== null && current2 !== null) {
    if (current1.val <= current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else if (current2.val < current1.val) {
      tail.next = current2;
      current2 = current2.next;
    }

    tail = tail.next;
  }

  if (current1 !== null) {
    tail.next = current1;
  }

  if (current2 !== null) {
    tail.next = current2;
  }

  return dummyNode.next;
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

mergeLists(a, q);
