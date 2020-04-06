Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result

function charConcat(string){
    let newStr = '';
    for(let i = 0 , j = string.length - 1 ; i < j ; i++, j--){
      newStr += `${string[i] + string[j] + (i + 1)}`;
    }
    return newStr;
  }

  function charConcat(str) {
    var i=1;
    var res='';
    while(str.length>1){
      res+=str.charAt(0)+str.charAt(str.length-1)+i;
      i++;
      str=str.slice(1,-1)
    }
    return res;
  }