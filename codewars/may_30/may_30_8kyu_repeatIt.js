Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string"

var repeatIt = function(str, n) {
    if(typeof str == "string"){
      let newStr = '';
      for(var i = 0; i < n; i++){
        newStr += str;
      }
      return newStr;
    }
    else{
      return 'Not a string';
    }
  }

  var repeatIt = function(str, n) {
    return typeof str === 'string' ? Array(n+1).join(str) : 'Not a string';
  }