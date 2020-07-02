Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == false

function arr2bin(arr){
    if(arr.length === 0) return "0";
    
    return !arr.every(e => typeof e === "number") ?
      false :
      arr.reduce((a,n) => a += n).toString(2);
  }

  function arr2bin(a) {
    if (a.some((x) => typeof x != "number"))
      return false;
    return a.reduce((a, b) => a + b, 0).toString(2);
  }
  