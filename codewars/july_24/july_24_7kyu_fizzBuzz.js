Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

C# ONLY: If N is smaller then or equal to 0, throw an ArgumentOutOfRangeException!
Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value 'Fizz' instead
If the value is a multiple of 5: use the value 'Buzz' instead
If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
C# method calling example:

string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]

// Return an array
function fizzbuzz(n){
    let newArr = [];
    for(let i = 1 ; i <= n ; i++) newArr.push(i);
    return newArr.map((num) => {
      if(num % 3 == 0 && num % 5 == 0) return "FizzBuzz";
      else if(num % 5 == 0) return "Buzz";
      else if(num % 3 == 0) return "Fizz";
      else return num;
    });
  }
  
// Return an array
var fizzify = fizzbuzz = function(n)
{
  return Array.apply(null, new Array(n)).map(function(e, i){
    return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
  }); 
}  