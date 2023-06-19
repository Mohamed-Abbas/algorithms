class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
📢 Introducing the first foundational pattern Iterating over each node! 🔄
This base pattern forms the backbone of linked list algorithms. 
The key concept is to be present, exit at end or specified condition💡. 
Optimal approach 💪 is to Check if current node is null. If null, we reached list's end ✔️. 
⚠️ Common mistake is accessing future node via current.next 🛑. 
Avoid complexity, stay focused!  
*/

export default function printLinkedList(head) {
  let current = head;

  /* 
     The most robust why to write this is to check if the current node is null. If it is null, then we know we have reached the end of the list.
     This will allow us to stay present which avoids complexity of having to
     check if the next node is null. As the most common mistake is to try to access a future node via
     current.next This will throw an error if current.next is null.
     */

  while (current !== null) {
    // Doing an operation with the current node. In this case, we are just printing the value.
    console.log(current.value);

    // move to the next node.
    current = current.next;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> null

// starting from the head to the tail
printLinkedList(a);
