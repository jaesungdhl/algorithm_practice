Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    let total = 0;
    let binArr = bin.toString().split("").map((e) => Number(e));
    for(let i = binArr.length - 1, j = 0 ; i >= 0 ; i--, j++){
      total += binArr[i] * (2**j);
    }
    return total;
  }

  function binToDec(bin){
    return parseInt(bin,2);
  }