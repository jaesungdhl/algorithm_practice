Write a function oddOneOut(str) that will take in a string and return the unpaired characters in the order it was encountered as an array.
E.g
str = 'Hello World' will return ["H", "e", " ", "W", "r", "l", "d"]
str = 'Codewars' -> ["C", "o", "d", "e", "w", "a", "r", "s"] (no letter has a pair)
str = 'woowee' -> [] (all letters pair up)
str = 'wwoooowweeee' -> []
str = 'racecar' -> ["e"]
str = 'Mamma' -> ["M"]
str = 'Mama' -> ["M", "m"]
Letters are case-sensitive.



function oddOneOut(str) {
    let strCount = {};
    let strArr = str.split("");
    let newArr = [];
    for(let char of str) {
      if(strCount[char]) strCount[char]++;
      else strCount[char] = 1;
    }
    for(let key in strCount) {
      if(strCount[key] <= 1) delete strCount[key];
      else if(strCount[key] % 2 !== 0) strCount[key]--;
    }
    for(let char of strArr) {
      if(!strCount[char]) newArr.push(char);
      else {
        if(strCount[char] === 0) {
          delete strCount[char];
          newArr.push(char);
        } else {
          strCount[char]--;
        }
      }
    }
    return newArr;
  }

  function oddOneOut(str) {
    let chars = new Set();
    for (let c of str) {
      if (chars.has(c))
        chars.delete(c);
      else
        chars.add(c);
    }
    return Array.from(chars);
  }