Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let count = {};
    A.forEach(num => !count[num] ? count[num] = 1 : count[num]++);
    for(let num in count) {
      if(count[num] % 2 !== 0) return Number(num);
    }
  }

  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);