Given an array of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the array is empty, you should return 0.

function evenLast(numbers) {
    return numbers.length == 0 ? 0 : numbers.filter((elem, index) => index % 2 == 0).reduce((a,n) => a += n) * numbers[numbers.length - 1];
  }

  const evenLast = n => n.reduce((p, c, i) => i % 2 ? p : p + c, 0) * n[n.length - 1] || 0