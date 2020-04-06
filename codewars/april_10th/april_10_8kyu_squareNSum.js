Complete the square sum method so that it squares each number passed into it and then sums the results together.

For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let newArr = [];
    let total = 0;
    numbers.forEach((element)=>{
      newArr.push(Math.pow(element,2));
    });
    newArr.forEach((element)=>{
      total += element;
    });
    return total;
  }