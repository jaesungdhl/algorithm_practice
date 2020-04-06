You are given an input string.

For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

But will your code be performant enough?

Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
There might be some non-ascii characters in the string.

function numericals(s){
    let alphabetCounter = {};
    let newStr = "";
    for(let char of s) {
      if(!alphabetCounter[char]) alphabetCounter[char] = 1;
      else alphabetCounter[char]++;
      newStr += String(alphabetCounter[char]);
    }
    return newStr;
  }

  const numericals = (str, seen = {}) =>
  str.replace(/./g, char => 
    seen[char] = (seen[char] || 0) + 1)