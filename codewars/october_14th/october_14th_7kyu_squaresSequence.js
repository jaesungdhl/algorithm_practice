Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]

function squares(x, n) {
    if(!n || n < 0) return [];
    let newArr = [x];
    for(let i = 1 ; i < n ; i++) {
      newArr.push(Math.pow(newArr[i - 1], 2));
    }
    return newArr;
  }

  function squares(x, n) {
    var ret = [];
    for(var i=0; i<n; i++){
      ret.push(x);
      x*= x;
    }
    return ret;
  }