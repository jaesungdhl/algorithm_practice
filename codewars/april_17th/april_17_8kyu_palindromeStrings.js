Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Examples
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false

function isPalindrome(line) {
    if(typeof line === "string"){
      return line.split("").reverse().join("") === line ? true : false;
    } else {
      return Number(line.toString().split("").reverse().join("")) === line ? true : false;
    }
  }