Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString){
    let hexToDec = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15};
    let total = 0;
    let hexArr = hexString.split("");
    let sign = 1;
    if(hexString[0] === "-"){
      sign = -1;
      hexArr.shift();
    }
    for(let i = 0, j = hexArr.length - 1; i < hexArr.length; i++, j--){
      total += hexToDec[hexArr[i].toUpperCase()] * (16 ** j);
    }
    return total * sign;
  }

  function hexToDec(hexString){
    return  parseInt(hexString, 16);
   }