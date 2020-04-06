In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.

More examples in the test cases.

Good luck!

function repeats(arr){
    let charCounter = {};
    for(let elem of arr) {
      if(!charCounter[elem]) charCounter[elem] = 1;
      else charCounter[elem]++;
    }
    return Object.entries(charCounter).reduce((a,n) => {
      if(n[1] == 1) a += Number(n[0]);
      return a;
    }, 0);
  };

  function repeats(arr){
    return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
  };