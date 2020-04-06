You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"

function averageString(str) {
    // Code away
    let numObj = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
    }
    let sum = 0;
    let numArr = str.split(" ");
    for(let num of numArr) {
        sum += numObj[num];
    }
    return !numObj[String(Math.floor(sum / numArr.length))] ? "n/a" : numObj[String(Math.floor(sum / numArr.length))];
}

const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  
  const averageString = (str) => {
    const nums = str.split(' ').map(v => numbers.indexOf(v));
    if (nums.includes(-1)) return 'n/a'
    const sum = nums.reduce((prev, cur) => prev + cur);
    const average = Math.floor(sum / nums.length)
    return numbers[average]
  }