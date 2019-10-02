/*
 Title: Cycle Detection
 Difficulty: Medium
 Score: 5
 Link: https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem
*/

function hasCycle(head) {
  if (head === null || head.next === null || head.next.next === null) return false;   // edge cases
  let hare = head;
  let tortoise = head;
  do {
      hare = hare.next.next;      // 'hare' moves twice per tick
      tortoise = tortoise.next;   // 'tortoise' moves once per tick
  } while (hare !== tortoise && hare.next !== null && hare.next.next !== null);
  return hare === tortoise;
}

// NODE CLASS

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
  insert (data) {
    this.next = new Node(data);
    return this.next;             // for chaining
  }
}

// TESTS

// cycle exists
const test1 = new Node(1);
const tail1 = test1.insert(2)               // tail1 === Node #8
  .insert(3)
  .insert(4)
  .insert(5)
  .insert(6)
  .insert(7)
  .insert(8);
const connection1 = test1.next.next.next;   // connection1 === Node #4
tail1.next = connection1;

// cycle does not exist
const test2 = new Node(1);
test2.insert(2)
  .insert(3)
  .insert(4)
  .insert(5)
  .insert(6)
  .insert(7)
  .insert(8);

// head is null instead of a node
const test3 = null;

// linked list only has one node, no cycle
const test4 = new Node(1);

// linked list only has two nodes, no cycle
const test5 = new Node(1);
test5.insert(2);

// linked list only has two nodes, tail links to head
const test6 = new Node(1);
const tail6 = test6.insert(2);              // tail6 === Node #2
tail6.next = test6;

console.log(hasCycle(test1));               // true
console.log(hasCycle(test2));               // false
console.log(hasCycle(test3));               // false
console.log(hasCycle(test4));               // false
console.log(hasCycle(test5));               // false
console.log(hasCycle(test6));               // true