const { reverse, DoublyLinkedListNode, DoublyLinkedList } = require('../../Data Structures/reverse-doubly-linked-list');
const { describe, it } = require('mocha')
const { expect } = require('chai')


describe('Reverse Doubly Linked List', () => {
  it('should reverse an empty list', () => {
    let node = new DoublyLinkedListNode(1)
    expect(reverse(node)).to.deep.equal(node)
  })

  it('should reverse a chain of linked nodes', () => {
    let list = new DoublyLinkedList();
    list.insertNode(1)
    list.insertNode(2)
    list.insertNode(3)
    list.insertNode(4)
    list.insertNode(5)

    let reversedList = new DoublyLinkedList();
    reversedList.insertNode(5)
    reversedList.insertNode(4)
    reversedList.insertNode(3)
    reversedList.insertNode(2)
    reversedList.insertNode(1)

    expect(reverse(list.head)).to.deep.equal(reversedList.head)
  })
})