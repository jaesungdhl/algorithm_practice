Just a simple sorting usage. Create a function that returns the elements of the input-array in a sorted manner.

sortme = function( names ){
    return names.sort();
  }

  sortme = function( names ){
    return names.sort(function(a, b) { return a > b ? 1 : a < b ? -1 : 0 });
  }