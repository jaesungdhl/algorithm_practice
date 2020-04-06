For this task you will be given an array of numbers, each number in turn has to be cubed and once all numbers have been cubed all of them have to be added to get a final sum.

If the final sum is less than or equal to the maximum value allowed for an Integer return the sum otherwise return "You've pushed me to the max!".

You can assume that you will receive a valid array of numbers.

function maxedOut(arr) {
    return arr.reduce((a, n) => a += n ** 3, 0) > Number.MAX_SAFE_INTEGER ? `You've pushed me to the max!` : arr.reduce((a, n) => a += n ** 3, 0);
  }

  const MAX    = Math.pow(2, 53) - 1;
const safely = (value, message) => value <= MAX ? value : message;
const cube   = (value) => Math.pow(value, 3);
const total  = (acc, currentValue) => acc + currentValue;

const maxedOut = (list) => 
  safely(
    list.map(cube).reduce(total), 
    "You've pushed me to the max!"
  );