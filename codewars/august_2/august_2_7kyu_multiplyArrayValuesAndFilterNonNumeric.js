Your task is to write a function, which takes two arguments and returns an array. First argument is an array of values, scecond is multiplier. Function is named "multiplyAndFilter" and it should filter all non-numeric values and multiply the rest by given multiplier.

function multiplyAndFilter(array, multiplier){
    return array.filter(elem => typeof elem == 'number').map(num => num * multiplier);
  }

  function multiplyAndFilter(a, b){
    return a.filter(x=>x>=0&&+x===x).map(x=>x*b)
  }