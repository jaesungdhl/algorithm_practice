Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15
multiply(10)==250
multiply(200)==25000
multiply(0)==0
multiply(-3)==-15

function multiply(number){
    return number * (number < 0 ? 5 ** (number.toString().length - 1) : 5 ** number.toString().length)
  }

  function multiply(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
  }