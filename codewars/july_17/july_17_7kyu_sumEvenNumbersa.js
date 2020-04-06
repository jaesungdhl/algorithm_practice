Write a function named sumEvenNumbers, taking an array of integers as single parameter. Your function must return the sum of the even values of this array.

For example, considering this input value : [4,3,1,2,5,10,6,7,9,8], then your function should return 30 (because 4 + 2 + 10 + 6 + 8 = 30).

function sumEvenNumbers(input) {
    return input.reduce((a,n) => n % 2 == 0 ? a += n : a, 0);
  }
  

  const sumEvenNumbers = a => a.reduce((r, e) => r + (e % 2 ? 0 : e), 0);