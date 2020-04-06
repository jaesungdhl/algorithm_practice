Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1

function reverseNumber(n) {
    let numberArr = n.toString().split("").reverse()
    if(numberArr[numberArr.length-1] === "-"){
      numberArr.unshift(numberArr.pop());
      return Number(numberArr.join(""));
    } else {
      return Number(numberArr.join(""))
    }
  }