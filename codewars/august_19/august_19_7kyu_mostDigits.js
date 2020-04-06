Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let charCount = array.map(num => String(num).length);
    let highestIndex = 0;
    let currentCount = 0;
    charCount.forEach((elem, i) => {
      if(elem > currentCount){
        currentCount = elem;
        highestIndex = i;
      }
    });
    return array[highestIndex];
  }

  const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);