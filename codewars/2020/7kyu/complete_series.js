You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.

If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0. like this:

inputs        outputs
[2,1]     ->  [0,1,2]
[1,4,4,6] ->  [0]
Notes: all numbers are positive integers.

This is set of example outputs based on the input sequence.

inputs        outputs
[0,1]   ->    [0,1]
[1,4,6] ->    [0,1,2,3,4,5,6]
[3,4,5] ->    [0,1,2,3,4,5]
[0,1,0] ->    [0]

function completeSeries(arr) {
    if(arr.length !== new Set(arr).size) return [0];
    
    let MaxNum = Math.max(...arr), SeriesToReturn = [];
    
    for(let i = 0; i <= MaxNum; i++) {
      SeriesToReturn.push(i);
    }
    
    return SeriesToReturn;
  }

  function completeSeries(arr) {
    return arr.length == new Set(arr).size ? [...Array(Math.max(...arr) + 1)].map((_, i) => i) : [0];
  }