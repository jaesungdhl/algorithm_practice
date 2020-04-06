Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
Inspired by https://adriann.github.io/programming_problems.html

function mergeArrays(a, b) {
    let newArr = [];
    let iteration = [[...a].length, [...b].length].sort((a,b) => b - a)[0];
    for(let i = 0 ; i < iteration ; i++) {
      newArr.push(a[i], b[i]);
    }
    return newArr.filter(e => e);
  }

  function mergeArrays(a, b) {
    // your code here
    var returnArray = [];
    var counter = 0;
    while (a[counter] || b[counter] ){
      if(a[counter]){
        returnArray.push(a[counter]);
      }
      if(b[counter]){
        returnArray.push(b[counter]);
      }
      counter++;
      
     }
     return returnArray;
  }