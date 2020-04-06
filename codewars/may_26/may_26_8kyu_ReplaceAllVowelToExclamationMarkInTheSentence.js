Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
Note
Please don't post issue about difficulty or duplicate. Because:

function replace(s){
    let returnStr = s.split("");
    let compareStr = s.toLowerCase().split("");
    let vowels = {a: true, e: true, i: true, o: true, u: true};
    for(var i = 0 ; i < s.length ; i++){
      if(vowels[compareStr[i]]){
        returnStr[i] = '!';
      }
    }
    return returnStr.join("");
  }

  function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }