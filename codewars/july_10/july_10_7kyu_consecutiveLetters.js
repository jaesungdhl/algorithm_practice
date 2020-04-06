In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True
All inputs will be lowercase letters.

More examples in test cases. Good luck!

function solve(s){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let newStr = s.split('').sort().join('');
    console.log(`The argument is ${s}\nsorted string is ${newStr}\nlength of newStr is ${newStr.length}\nfirst index of alphabet is ${alphabets.indexOf(newStr[0])}\nlength needs cut is ${newStr.length}\ncomparison string is ${alphabets.slice(alphabets.indexOf(newStr[0]), newStr.length)}`);
    return alphabets.slice(alphabets.indexOf(newStr[0]), alphabets.indexOf(newStr[0]) + newStr.length) == newStr;
  }

  function solve(s) {
    return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
  }