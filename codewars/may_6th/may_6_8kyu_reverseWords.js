Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let strArr = str.split(" ");
    for(var i = 0 ; i < strArr.length; i++){
      strArr[i] = strArr[i].split("").reverse().join("");
    }
    return strArr.join(" ");
  }

  function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }