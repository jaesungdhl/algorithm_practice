Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.

function remove(s){
    let strArr = s.split("");
    let iteration = strArr.length - 1;
    for(var i = iteration; i > 0 ; i--){
      if(strArr[i] === "!"){
        strArr.pop();
      } else{
        break;
      }
    }
    return strArr.join("");
  }

  const remove = s => s.replace(/!+$/, '');