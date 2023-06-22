class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
 Zip two linked lists together. By alternating between the two lists, we can weave them together in a single list.
 This idea is a mix of the the iterating pattern with alternating logic that will determine which list to pull from.
 The pulled node will be added to the tail effectively rewiring the list.
*/

export default function zipperLists(head1, head2) {
  const mergedHead = head1;
  let mergedTail = head1;
  let currentList1 = head1.next;
  let currentList2 = head2;
  let iterationCount = 0;

  while (currentList1 !== null && currentList2 !== null) {
    if (iterationCount % 2 === 0) {
      mergedTail.next = currentList2;
      currentList2 = currentList2.next;
    } else {
      mergedTail.next = currentList1;
      currentList1 = currentList1.next;
    }
    iterationCount = iterationCount + 1;
    mergedTail = mergedTail.next;
  }

  if (currentList1 !== null) {
    mergedTail.next = currentList1;
  }

  if (currentList2 !== null) {
    mergedTail.next = currentList2;
  }

  return mergedHead;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z
