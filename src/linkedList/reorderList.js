class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const nodeOne = new Node(1);
const nodeTwo = new Node(2);
const nodeThree = new Node(3);
const nodeFour = new Node(4);
const nodeFive = new Node(5);

nodeOne.next = nodeTwo;
//nodeTwo.next = nodeThree;

nodeThree.next = nodeFour;
//nodeFour.next = nodeFive;

function getTailNode(head) {
  if (head.next === null) return head;
  return getTailNode(head.next);
}

function zipTwoLists(listOne, listTwo) {
  if (listOne === null && listTwo === null) return;
  if (listOne === null) return listTwo;
  if (listTwo === null) return listOne;

  let listOneNext = listOne.next;
  let listTwoNext = listTwo.next;
  listOne.next = listTwo;
  listTwo.next = zipTwoLists(listOneNext, listTwoNext);

  return listOne;
}

function findMidOfList(head) {
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverseLinkedList(head, prev = null) {
  if (head === null) return prev;
  const nextNode = head.next;
  head.next = prev;
  return reverseLinkedList(nextNode, head);
}

function reorderList(head) {
  const midNode = findMidOfList(head);
  const reversedList = reverseLinkedList(midNode.next);
  midNode.next = null;
  zipTwoLists(head, reversedList);
}

function findNthNodeFromStart(head, n) {
  let index = 0;
  function find(head) {
    if (head === null) return head;
    ++index;
    if (index === n) {
      return head;
    }
    return find(head.next);
  }
  return find(head);
}

function findNthNodeFromEnd(head, n) {
  let index = 0;
  let node = head;
  function find(head) {
    if (head === null) return head;
    find(head.next);
    ++index;
    if (index === n) {
      node = head;
    }
  }
  find(head);
  return node;
}

function removeNthNodeFromEnd(head, n) {
  let current = head;
  let prev = null;
  console.log(head);
  const nthNodeFromEnd = findNthNodeFromEnd(head, n);

  console.log(nthNodeFromEnd);

  while (current !== nthNodeFromEnd) {
    prev = current;
    current = current.next;
  }

  if (prev == null) {
    if (head) {
      head = head.next;
    } else {
      head = null;
    }
  } else {
    prev.next = nthNodeFromEnd.next;
  }
}

function createList([first, ...rest] = []) {
  const list = new Node(first);
  let tail = list;
  rest.forEach((value) => {
    const node = new Node(value);
    tail.next = node;
    tail = node;
  });
  return list;
}

function zipTwoSortedLists(list1, list2) {
  const newList = new Node();
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  if (!list1 && !list2) {
    return newList;
  }
  if (list1.value <= list2.value) {
    newList.value = list1.value;
    list1 = list1.next;
  } else if (list2.value < list1.value) {
    newList.value = list2.value;
    list2 = list2.next;
  }
  let tail = newList;

  while (list1 && list2) {
    if (list1.value <= list2.value) {
      tail.next = list1;
      list1 = list1.next;
      tail = tail.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
      tail = tail.next;
    }
  }

  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }

  return newList;
}

function printLinkedList(current) {
  if (current === null) return;
  console.log(current.value);
  printLinkedList(current.next);
}

const l1 = createList([1, 2, 4]);
const l2 = createList([1, 3, 4]);

console.log(printLinkedList(zipTwoSortedLists(l1, l2)));
