There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    let counter = {};
    for(let num of arr) {
      if(!counter[num]) counter[num] = 1;
      else counter[num]++;
    }
    for(let key in counter) {
      if(counter[key] === 1) return Number(key);
    }
  }
  
  function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }