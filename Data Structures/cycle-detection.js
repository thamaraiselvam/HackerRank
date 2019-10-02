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

module.exports = {
  hasCycle,
  Node,
};