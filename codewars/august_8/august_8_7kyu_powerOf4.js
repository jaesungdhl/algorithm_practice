Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)

Examples
powerOf4(1024) // returns true
powerOf4(44) // returns false
powerOf4("not a positive integer") // returns false

function powerOf4(n) {
    if(typeof n !== "number") return false;
    if(!n) return false;
    if(Math.sign(n) == -1) return false;
    return n % 4 == 0 ? true : false;
  }

  function powerOf4(n) {
    return n > 0 && !isNaN(n) && !(n % 4);
  }