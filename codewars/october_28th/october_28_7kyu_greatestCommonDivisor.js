Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x,y){
    let x_y = 1;
    while(x !== y) {
      if(x > y) {
        x_y = x - y;
        x = x_y;
      } else {
        x_y = y - x;
        y = x_y;
      }
    }
    return x_y;
  }


  function mygcd(x,y){
    return y == 0 ? x : mygcd(y, x % y)
  }