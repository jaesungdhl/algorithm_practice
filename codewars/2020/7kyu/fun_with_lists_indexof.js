Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!

This kata is part of fun with lists series:

Fun with lists: length
Fun with lists: indexOf
Fun with lists: lastIndexOf
Fun with lists: countIf
Fun with lists: anyMatch + allMatch
Fun with lists: filter
Fun with lists: map
Fun with lists: reduce


function indexOf(head, value) {
    if(head === null) return -1;
    
    let ArrFromLinkedList = getArrayFromLinkedList(head);
    ArrFromLinkedList.reverse();
    
    return ArrFromLinkedList.indexOf(value);
  }
  
  function getArrayFromLinkedList(List) {
    if(List.next === null) return [List.data];
    
    let Array = getArrayFromLinkedList(List.next);
    Array.push(List.data);
    
    return Array;
  }

  function indexOf(node, value) {
    var i = 0;
    while (node !== null) {
      if (node.data === value) return i;
      node = node.next;
      ++i;
    }
    return -1;
  }