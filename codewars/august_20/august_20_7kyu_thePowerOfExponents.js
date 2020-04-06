This kata is based on: Exponent Method

Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.

Unlike the Exponent Method, you should also take in account negative exponents.

Your solution won't be tested against special cases leading to undefined values (0**-2 for example)

Note: The ** operator (JS: Math.pow) has been disabled.

Examples:

power(2, 3)   // 8
power(4, -2)  // 0.0625

function power(base, exponent){
    if(!exponent) return 1;
    let total = 0;
    let isNegative = false;
    if(exponent < 0) {
      exponent = Math.abs(exponent);
      isNegative = true;
    }
    for(let i = base, j = 1 ; j <= exponent ; i *= base, j++) {
      total = i;
    }
    return isNegative ? (1/total) : total;
  }

  function power(base, exponent) {

    let inv = exponent < 0;
    let exp = Math.abs(exponent);
    let res = 1;
  
    while (exp--)
      res *= base;
  
    return inv ? 1 / res : res;
   
  }