You are provided with array of positive non-zero ints and int n representing n-th power (n >= 2).

For the given array, calculate the sum of each value to the n-th power. Then subtract the sum of the original array.

Example 1: Input: {1, 2, 3}, 3 --> (1 ^ 3 + 2 ^ 3 + 3 ^ 3 ) - (1 + 2 + 3) --> 36 - 6 --> Output: 30

Example 2: Input: {1, 2}, 5 --> (1 ^ 5 + 2 ^ 5) - (1 + 2) --> 33 - 3 --> Output: 30

function modifiedSum(a, nth) {
    // Write your code here
    let Sum = a.reduce((a,n) => a += n),
        NthPowerSum = a.reduce((a,n) => a += (n ** nth), 0);
        
    return NthPowerSum - Sum;
    
  }

  function modifiedSum(a, n) {
    return a.reduce((s, c) => s + Math.pow(c, n) - c, 0);
  }