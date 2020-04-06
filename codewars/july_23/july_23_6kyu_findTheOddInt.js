Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let counter = {};
    A.forEach((num) => {
      if(!counter[num]) counter[num] = 1;
      else counter[num]++;
    });
    for(let key in counter){
      if(counter[key] % 2 !== 0) return Number(key);
    }
  }

  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);