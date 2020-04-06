Task
The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.

Input/Output
[input] integer year

1000 ≤ year ≤ 9000

[output] an integer

the minimum year number that is strictly larger than the input number year and all its digits are distinct.

function distinctDigitYear(year) {
    while(year <= 9000) {
      year++;
      if(Array.from(new Set(year.toString().split(""))).length === year.toString().length) {
        return year;
      };
    }
  }

  function distinctDigitYear(year) {
    do{year++}while(new Set(year.toString()).size<4);
    return year;  
  }