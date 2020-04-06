Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
Good Luck!

function doubleChar(str) {
    let strArr = str.split("");
    for(var i = 0; i < strArr.length; i++){
      strArr[i] = strArr[i] + strArr[i]
    }
    return strArr.join("");
  }

  const doubleChar = (str) => str.split("").map(c => c + c).join("");