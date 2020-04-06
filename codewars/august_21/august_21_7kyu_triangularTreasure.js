Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

  triangular(0)==0,
  triangular(2)==3,
  triangular(3)==6,
  triangular(-10)==0

  // Return the nth triangular number
function triangular( n ) {
    if(n <= 0) return 0;
    for(let i = 1 , j = 1; i <= n ; i++ , j += i){
      if(i == n) return j;
    }
  }

  function triangular( n ) {
    return (n > 0) ? ((n * n) + n) / 2 : 0;
  }