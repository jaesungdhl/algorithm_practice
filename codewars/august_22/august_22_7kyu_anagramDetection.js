An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {
    if(test.length !== original.length) return false;
    else {
      return test.split("").map(c => c.toLowerCase()).sort().join("") ==
        original.split("").map(c => c.toLowerCase()).sort().join("");
    }
  };

  
  var isAnagram = function(test, original) {
    return test.length === original.length && [].every.call(test, function(char){return original.toUpperCase().indexOf(char.toUpperCase()) !== -1})
  };