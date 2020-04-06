If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of ProjectEuler.net

function solution(number){
    if(number <= 3) return 0;
    let multiplesArr = [];
    for(let i = 3 ; i < number ; i += 3) {
      multiplesArr.push(i);
    }
    for(let i = 5 ; i < number ; i += 5) {
      multiplesArr.push(i);
    }
    return Array.from(new Set(multiplesArr)).reduce((a,n) => a += n);
  }

  function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }