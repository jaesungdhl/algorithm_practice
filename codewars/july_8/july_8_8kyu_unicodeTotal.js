You'll be given a string, and have to return the total of all the unicode characters as an int. Should be able to handle any characters sent at it.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal(s){
    let total = 0;
    for(let i = 0 ; i < s.length ; i++){
      total += s.charCodeAt(i);
    }
    return total;
  }

  onst uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);