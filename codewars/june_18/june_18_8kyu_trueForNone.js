Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

Ruby: If you need help, here is a reference:

function none(arr, fun){
    return arr.every((elem) => !fun(elem));
  }

  function none(arr, fun){
    return !arr.some(fun);
  }
  