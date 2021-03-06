Function nthChar takes 1 parameter - an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string.

Note: Test cases contain valid input only - i.e. a string array or an empty array, each word will have at least as many letters as its ordinal position.

function nthChar(words){
    return words.reduce((a,n,i) => a += n[i], "");
  }

  const nthChar = words => words.reduce((a, b, index) => a + b[index], "");