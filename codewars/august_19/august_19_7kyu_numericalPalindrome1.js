A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

Return "Not valid" if the input is not an integer or less than 0.

function palindrome(num) { 
    if(typeof num == 'string' || num < 0) return "Not valid";
    let numStr = String(num);
    for(let i = 0, j = numStr.length - 1 ; i < Math.floor(numStr.length / 2) ; i++, j--){
      if(numStr[i] != numStr[j]) return false;
    }
    return true;
  } 

  const palindrome = n => {
    if (typeof n !== 'number' || n < 0) return "Not valid"
    return String(n).split('').reverse().join('') === String(n)
  }