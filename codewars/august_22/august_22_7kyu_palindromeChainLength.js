Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.

Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

Input will always be a positive integer.

For example, start with 87:

87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884

4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4

var palindromeChainLength = function(n) {
    let numStr = n.toString();
    for(let i = 0 ; i < Number.POSITIVE_INFINITY ; i++) {
      if(numStr == numStr.split("").reverse().join("")) return i;
      numStr = eval(`${numStr} + ${numStr.split("").reverse().join("")}`).toString();
    }
  };
  
  var palindromeChainLength = function(n) {
    var steps = 0;
    while(!isPalindromic(n)) {
      steps++;
      n+=reverseNum(n);
    }
    return steps;
  };
  
  function isPalindromic(n) {
    if (n < 0) throw 'isPalindromic only works for positive numbers.';
    if (Math.floor(n / 10) === 0) return true; // Single digit numbers are palindromic.
    if (n % 10 === 0) return false; // n > 0, without leading 0s cannot be palindromic if ending in 0.
    return reverseNum(n) === n;
  }
  
  function reverseNum(n) {
    var r = 0;
    while (n) {
      r *= 10;
      r += n % 10;
      n = Math.floor(n / 10);
    }
    return r;
  }  