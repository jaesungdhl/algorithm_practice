Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"

function freqSeq(str, sep) {
    let counter = {}, newStr = [];
    
    for(let char of str) {
      if(!counter[char]) counter[char] = 1;
      else counter[char]++;
    }
    
    for(let char of str) {
      newStr.push(counter[char]);
    }
    
    return newStr.join(sep);
  }

  function freqSeq(str, sep) {
    return str.split('').map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep);
  }