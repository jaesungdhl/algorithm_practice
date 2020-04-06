Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
    let newArr = [];
    for(let i = 0 ; i < str.length ; i += 2) {
      newArr.push(str.substring(i, i + 2));
    }
    return newArr.map(str => str.length === 1 ? str + "_" : str);
  }

  function solution(str) {
    return (str.length % 2 ? str + '_' : str).match(/../g);
  }