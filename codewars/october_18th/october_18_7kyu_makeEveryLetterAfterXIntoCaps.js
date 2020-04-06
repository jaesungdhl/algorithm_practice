Imagine a book author has hired us to create a function that takes his book as a string as input and finds all instances of a letter that we will call 'x' (case-sensitive) and turns all the letters after 'x' into a capital letter.

For example.

makeEveryLetterAfterXCaps('and larry walked into the park late to chase a squirrel', 'l')

Should return:

"and lArry walKed into the park lAte to chase a squirrel"

If the letter after x is already in caps it should stay in caps.

var makeEveryLetterAfterXCaps = function (str, letter) {
    let strArr = str.split("");
    for(let i = 0 ; i < strArr.length - 1 ; i++) {
      if(strArr[i] === letter) strArr[i + 1] = strArr[i + 1].toUpperCase();
    }
    return strArr.join("");
  }

  makeEveryLetterAfterXCaps=(s,x)=>s.split(x).reduce((a,b)=>a+x+b.replace(/^./,c=>c.toUpperCase()))