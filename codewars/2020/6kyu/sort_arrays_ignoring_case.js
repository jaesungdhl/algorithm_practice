Sort the given strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
    return names.sort((a,b) => a.toLowerCase() > b.toLowerCase());
  }

  sortme = function( names ){
    return names.sort(function(first, second) {
      return first.toLowerCase().localeCompare(second.toLowerCase())
    })
  }