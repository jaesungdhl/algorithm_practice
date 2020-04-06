You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

function twoSort(s) {
    let newStr = '';
    for(var c of s.sort()[0]) newStr += c + '***';
    return newStr.slice(0, newStr.length - 3);
  }

  function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }