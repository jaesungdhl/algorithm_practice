In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!

function solve(s){
    let uppercase = /[A-Z]/g;
    let lowercase = /[a-z]/g;
    let uppercaseCount = s.match(uppercase);
    let lowercaseCount = s.match(lowercase);
    if(uppercaseCount === null) uppercaseCount = [0];
    else if(lowercaseCount === null) lowercaseCount = [0];
    return uppercaseCount.length === lowercaseCount.length ? s.split("").map(c => c.toLowerCase()).join("") :
      uppercaseCount.length > lowercaseCount.length ? s.split("").map(c => c.toUpperCase()).join("") :
      s.split("").map(c => c.toLowerCase()).join("");
  }

  const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()