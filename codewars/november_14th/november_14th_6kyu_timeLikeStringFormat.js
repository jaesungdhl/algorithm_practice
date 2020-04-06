Build up a method that takes an integer and formats it to a 'time - like' format.

The method must raise an exception if its hour length is less than 3 digits and greater than 4.

Example:
solution(800); // should return '8:00'
solution(1000); // should return '10:00'
solution(1451); // should return '14:51'
solution(3351); // should return '33:51'
solution(10000); // should raise an exception

function solution(hour) {
    //The hour parameter should be an integer with 3 or four digits (I.E. 800)
    if(hour.toString().length === 3) {
      return hour.toString().split("").map((digit,idx) => idx === 0 ? `${digit}:` : digit).join("");
    }
    if(hour.toString().length === 4) {
      return hour.toString().split("").map((digit,idx) => idx === 1 ? `${digit}:` : digit).join(""); 
    }
    throw new Error("wrong value");
  }

  function solution(hour) {
    var string = hour.toString();
    if (string.length < 3 || string.length > 4)  
      throw "Number must have 3 or 4 digits";
    return string.slice(0, -2) + ":" + string.slice(-2);
  }