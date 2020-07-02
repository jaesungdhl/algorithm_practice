Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    //code me
    let NumArr = num.toString().split(""), ArrWithDashes = [];
    
    for(let i = 0; i < NumArr.length - 1; i++) {
      ArrWithDashes.push(NumArr[i]);
      
      if(Number(NumArr[i]) % 2 !== 0 && Number(NumArr[i + 1]) % 2 !== 0) {
        ArrWithDashes.push("-");
      }
    }
    
    ArrWithDashes.push(NumArr[NumArr.length - 1]);
    
    return ArrWithDashes.join("");
 }

 function insertDash(num) {
    return num.toString().replace(/[13579](?=[13579])/g, "$&-");
 }