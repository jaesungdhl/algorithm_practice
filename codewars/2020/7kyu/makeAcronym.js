Implement a function called makeAcronym that returns the first letters of each word in a passed in string.

Make sure the letters returned are uppercase.

If the value passed in is not a string return 'Not a string'.

If the value passed in is a string which contains characters other than spaces and alphabet letters, return 'Not letters'.

If the string is empty, just return the string itself: "".

EXAMPLES:

'Hello codewarrior' -> 'HC'

'a42' -> 'Not letters'

42 -> 'Not a string'

[2,12] -> 'Not a string'

{name: 'Abraham'} -> 'Not a string'

var makeAcronym = function(string){
    if(typeof string !== "string" || string === "") return "Not a string";
    if(/[0-9]/.test(string)) return "Not letters";
    let StrArr = string.split(" ");
    
    return !StrArr.every(substr => /[a-z]/i.test(substr[0])) ?
      "Not letters" :
      StrArr.reduce((a,n) => a += n[0].toUpperCase(), "");
  };

  var makeAcronym = function(string) {
    if(typeof string !== 'string') return 'Not a string';
    if(/\d/.test(string)) return 'Not letters';
    return string
        .split(' ')
        .map(function(word) { return word[0] })
        .join('')
        .toUpperCase()
  };