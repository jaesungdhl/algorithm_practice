Write a functionthat returns the number of occurrences of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;

Array.prototype.numberOfOccurrences = function(number){
    console.log(this.valueOf(), number);
    let counter = {};
    this.valueOf().forEach((num) => {
      if(!counter[num]) counter[num] = 1;
      else counter[num]++;
    })
    return !counter[number] ? 0 : counter[number];
  }

  Array.prototype.numberOfOccurrences = function(search) {
    return this.filter( function(num){ return search === num } ).length;
  }