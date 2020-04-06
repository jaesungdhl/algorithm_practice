Task
Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
Good luck!

const ultimateReverse = s => {
    let lengthArr = s.map((word) => word.length);
    let reversedStr = s.join("").split("").reverse().join("");
    let newArr = [];
    lengthArr.forEach((num) => {
      newArr.push(reversedStr.slice(0, num));
      reversedStr = reversedStr.slice(num);
    });
    return newArr;
  };

  function ultimateReverse(words) {
    let reversed = [...words.join('')].reverse();
    return words.map(word => reversed.splice(0, word.length).join(''));
}