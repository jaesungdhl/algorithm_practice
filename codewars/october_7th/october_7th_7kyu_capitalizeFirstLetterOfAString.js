Capitalize First Letter of a String
Write a method, capitalize(), such that when the method is called on a String, only the very first letter of the string is capitalized (if it is a letter). For example:

"string".capitalize() === "String"
"hello World".capitalize() === "Hello World"
"i love codewars".capitalize() === "I love codewars"
"This sentence is already capitalized".capitalize() === "This sentence is already capitalized"
"0123the first character of this sentence is not a letter".capitalize() === "0123the first character of this sentence is not a letter"
Disabled Methods
For the purposes of this Kata, the following methods are disabled:

toUpperCase()
toLowerCase()
Hint
If you are really stuck as to what function/method to define, click here to reveal the answer.

String.prototype.capitalize = function() {
    let strArr = this.split("");
    if( /[a-z]/.test(strArr[0]) ) {
      strArr[0] = String.fromCharCode(strArr[0].charCodeAt(0) - 32);
    }
    return strArr.join("");
  }

  String.prototype.capitalize = function () {
    let c = this.charCodeAt(0)
    if (97 <= c && c <= 122) c -= 32
    
    return String.fromCharCode(c) + this.slice(1)
  }