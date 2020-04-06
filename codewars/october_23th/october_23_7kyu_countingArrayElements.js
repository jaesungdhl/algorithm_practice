Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}

function count(array){
    let counter = {};
    array.forEach(e => {
      if(!counter[e]) counter[e] = 1;
      else counter[e]++;
    });
    return counter;
  }

  function count(array){
    return array.reduce(function (stack, value) {
      return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});
  }