As part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.

For example, for a given array arr

[0, -3, 7, 4, 0, 3, 7, 9]
Finding length between two 7s like

lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)
would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurrences of the number to search for, return 0, or in Haskell, Nothing.

var lengthOfSequence = function (arr, n) {
    let numCount = {};
    arr.forEach(num => {
      if(!numCount[num]) numCount[num] = 1;
      else numCount[num]++;
    });
    for(let key in numCount) {
      if(numCount[key] === 2) {
        numCount = Number(key);
        break;
      }
    }
    return typeof numCount === "object" ? 0 : ((arr.lastIndexOf(numCount) + 1) - (arr.indexOf(numCount) + 1)) + 1;
  };

  function lengthOfSequence(arr, n){
    return arr.count(n) == 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
  }
  
  Array.prototype.count = function(n){
    return this.filter(function(v){ return v == n }).length;
  }