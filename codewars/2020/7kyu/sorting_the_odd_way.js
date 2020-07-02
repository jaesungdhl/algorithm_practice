Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

If there are no issues with the kata and you successfully completed it, please rank and upvote!

function sortItOut(array){
    let OddEven = [[],[]];
    
    for(let i = 0; i < array.length; i++) {
      if(!Number.isInteger(Math.floor(array[i]) / 2)) {
        OddEven[0].push(array[i]);
      } else {
         OddEven[1].push(array[i]);
      }
    }
    
    OddEven[0].sort((a,b) => a - b);
    OddEven[1].sort((a,b) => b - a);
    
    return [...OddEven[0], ...OddEven[1]]
  }

  function sortItOut(array){
    return array.filter(x => Math.floor(x) % 2 == 1)
                .sort((a, b) => a - b)
                .concat(array.filter(x => Math.floor(x) % 2 == 0)
                             .sort((a, b) => b - a));
    
 }