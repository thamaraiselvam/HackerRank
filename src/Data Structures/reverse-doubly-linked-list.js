/*
 Title: Reverse a doubly linked list
 Difficulty: Easy
 Score: 5
 Link: https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem
*/

class DoublyLinkedListNode {
	constructor(nodeData) {
		this.data = nodeData;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	insertNode(nodeData) {
		const node = new DoublyLinkedListNode(nodeData);

		if (this.head == null) {
			this.head = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
		}

		this.tail = node;
	}
}
function reverse(head) {
	while (head.next) {
		head = head.next;
	}

	const newList = new DoublyLinkedList();

	while (head) {
		newList.insertNode(head.data);
		head = head.prev;
	}
	return newList.head;
}

module.exports = {
	reverse,
	DoublyLinkedList,
	DoublyLinkedListNode,
};
