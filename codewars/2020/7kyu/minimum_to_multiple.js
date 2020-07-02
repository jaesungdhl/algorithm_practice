Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

minimum(10, 6)  //= 2

10+2 = 12 which is a multiple of 6
Note
0 is always a multiple of x
Constraints
1 <= a <= 106

1 <= x <= 105

function minimum(a, x) {
    let counter = 0;
    while(true) {
      if((a + counter) % x === 0 || (a - counter) % x === 0) {
        return counter;
      }
      counter++;
    }
  }

  const minimum = (a, x) => Math.min(x - a % x, a % x)