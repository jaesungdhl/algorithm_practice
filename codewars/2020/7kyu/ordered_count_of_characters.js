Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

var orderedCount = function (text) {
    let Counter = {};
    let TuplesArr = [];
    
    for(let char of text) {
      if(!Counter[char]) Counter[char] = 1;
      else Counter[char]++;
    }
    
    for(let char of new Set(text)) {
      TuplesArr.push([char, Counter[char]]);
    }
    
    return TuplesArr;
  }

  const orderedCount = s =>
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));