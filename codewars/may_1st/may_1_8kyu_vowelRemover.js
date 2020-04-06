Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
Don't worry about uppercase vowels.

function shortcut(string){
    let vowels = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true,
    }
    let newStr = "";
    for(var i = 0 ; i < string.length; i++){
      if(!vowels[string[i]]){
        newStr += string[i];
      }
    }
    return newStr;
  }

  function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }