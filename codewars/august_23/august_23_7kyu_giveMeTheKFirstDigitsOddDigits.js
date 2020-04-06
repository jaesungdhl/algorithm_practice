You're given two integers – n and k. n is always positive, while k >= 0. Write a function that returns first k odd digits in a number n.

The output should also be an integer.

In the following cases a function should return 0:

there are no odd digits in a number n;
k is bigger than a number of digits in n;
k = 0;
k is bigger than a number of odd digits in n.
BTW, is 0 an odd number or an even one?

function findOddDigits(n, k) {
    let numArr = String(n).split("");
    let count = 0;
    let returnNum = '';
    for(let i = 0 ; i < numArr.length ; i++) {
      if(count < k) {
        if(!Number.isInteger(Number(numArr[i]) / 2)) {
          returnNum += numArr[i];
          count++;
        }
      } else break;
    }
    return k > returnNum.length ? 0 : Number(returnNum);
  }

  function findOddDigits(n, k) {
    const odd = (""+n).replace(/[02468]/g,'');
    return k > odd.length ? 0 : +odd.substr(0,k);
  }