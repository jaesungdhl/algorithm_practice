Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"
If either input is an empty string, consider it as zero.

function sumStr(a,b) {
    if(a !== "" && b !== ""){
      let sum = eval(a + "+" + b);
      console.log(sum.toString());
      return sum.toString();
    } else if(a !== "") {
      return a;
    } else if(b !== ""){
      return b;
    } else {
      return '0';
    }
  }