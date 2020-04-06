Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., '1' !== 1).

Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, '5']  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []

function duplicates(arr) {
    let counter = new Map();
    let newArr = [];
    for(let element of arr){
      if(!counter.has(element)){
        counter.set(element, 1);
      } else {
        let currentCount = counter.get(element);
        counter.delete(element);
        counter.set(element, currentCount += 1);
      }
    }
    for(let [key,value] of counter){
      if(value > 1) newArr.push(key);
    }
    return newArr;
  }

  function duplicates(arr) {
    return arr.filter(function(v, i) {return arr.indexOf(v) != i && arr.lastIndexOf(v) == i;});
  }