Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

function sumMix(x){
  let total = 0;
  x.forEach((element) => {
    total += Number(element);
  })
  return total;
}
