const { hasCycle, Node } = require('../../src/Data Structures/cycle-detection');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Cycle Detection', () => {
  it('should detect a cycle in a regular linked list', () => {
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
    expect(hasCycle(test1)).to.equal(true);
  });

  it('should return false when the end of the list points to null', () => {
    const test2 = new Node(1);
    test2.insert(2)
      .insert(3)
      .insert(4)
      .insert(5)
      .insert(6)
      .insert(7)
      .insert(8);
    expect(hasCycle(test2)).to.equal(false);
  });

  it('should return false when head is null instead of a node', () => {
    const test3 = null;
    expect(hasCycle(test3)).to.equal(false);
  });

  it('should return false when the linked list only has one node that points to null', () => {
    const test4 = new Node(1);
    expect(hasCycle(test4)).to.equal(false);
  });

  it('should return false when the linked list only has two nodes', () => {
    const test5 = new Node(1);
    test5.insert(2);
    expect(hasCycle(test5)).to.equal(false);
  });

  it('should return false when the linked list only has two nodes but the tail links to head', () => {
    const test6 = new Node(1);
    const tail6 = test6.insert(2);              // tail6 === Node #2
    tail6.next = test6;
    expect(hasCycle(test6)).to.equal(true);
  });
})
