/*
 Title: Reverse a doubly linked list
 Difficulty: Easy
 Score: 5
 Link: https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem
*/

function reverse(head) {
    while (head.next) {
        head = head.next
    }
    
    const newList = new DoublyLinkedList();

    while (head) {
        newList.insertNode(head.data);
        head = head.prev
    }
    return newList.head 
}
