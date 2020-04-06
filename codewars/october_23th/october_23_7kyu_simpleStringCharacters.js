In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!

function solve(s){
    return [s.match(/[A-Z]/g).length, s.match(/[a-z]/g).length, s.match(/[0-9]/g).length, s.match(/\W/g).length];
  }

  const solve = (str) => (
    [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
  );