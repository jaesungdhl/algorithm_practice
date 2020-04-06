Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution('camelCasing') // => should return 'camel Casing'

// complete the function
function solution(string) {
    let newStr = "";
    for(let char of string) {
      if(/[A-Z]/.test(char)) newStr += ` ${char}`;
      else newStr += char;
    }
    return newStr;
  }

  // complete the function
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }