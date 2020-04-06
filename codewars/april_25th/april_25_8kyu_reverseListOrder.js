In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples
reverseList([1,2,3,4]) == [4,3,2,1]
reverseList([3,1,5,4]) == [4,5,1,3]

function reverseList(list) {
    let start = 0;
    let end = list.length - 1;
    
    while(start < end){
      let storage = list[start];
      list[start] = list[end];
      list[end] = storage;
      start++;
      end--;
    }
    
    return list;
  }

  function reverseList(list) {
    return list.reverse();
  }