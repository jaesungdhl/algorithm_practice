Implement a function which filters out array values which satisfy the given predicate.

reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

function reject(array, predicate) {
    let FilteredArray = [];
    
    for(let item of array) {
      if(!predicate(item)) FilteredArray.push(item);
    }
    
    return FilteredArray;
  }

  function reject(array, iterator) {
    return array.filter(function(x) {return !iterator(x);});
  }