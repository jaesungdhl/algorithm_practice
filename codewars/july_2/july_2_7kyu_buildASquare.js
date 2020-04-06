I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

function generateShape(int){
    let square = '';
    for(let i = 0 ; i < int ; i++){
      for(let j = 0 ; j < int ; j++){
        square += '+';
      }
      square += '\n';
    }
    return square.slice(0, square.length - 1);
  }

  function generateShape(n){
    return ("+".repeat(n)+"\n").repeat(n).trim()
  }