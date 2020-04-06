Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

function distinct(a) {
    let newArr = [];
    let newSet = new Set(a);
    newSet.forEach((elem) => newArr.push(elem));
    return newArr;
  }

  function distinct(a) {
    return Array.from(new Set(a));
  }

  function distinct(a) {
    return [...new Set(a)];
  }