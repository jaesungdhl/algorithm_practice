Write a program to determine if a string contains all unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters.

function hasUniqueChars(str){
    return Array.from(new Set(str)).length == str.length;
  }

  function hasUniqueChars(str){
    return str.split('').every(function(v, i, arr){
      return arr.indexOf(v) == i;
    });
  }