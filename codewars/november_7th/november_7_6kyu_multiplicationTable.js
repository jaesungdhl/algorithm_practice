Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    let newArr = [];
    for(let i = 1 ; i <= size ; i++) {
      let subArr = [];
      for(let j = 1 ; j <= size ; j++) {
        subArr.push(i * j);
      }
      newArr.push(subArr);
    }
    return newArr;
  }

  
  multiplicationTable = function(size) {

    return Array.apply(null, new Array(size)).map(function(val, i) {
      return Array.apply(null, new Array(size)).map(function(val, j) {
        return (i+1) * (j+1);
      });
    });
  }