Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
    let strArr = str.split(" ");
    return `${strArr[1]} ${strArr[0]}`
  }

  function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }