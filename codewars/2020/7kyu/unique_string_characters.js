In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

Please also try Simple remove duplicates

function solve(a,b){
    let AMatch, BMatch;
  
    try {
      let BRegex = new RegExp(`[^${b}]`, "gi");
      AMatch = a.match(BRegex).join("");
    }
    catch(e) {
     AMatch = ""; 
    }
    
    try {
      let ARegex = new RegExp(`[^${a}]`, "gi");
      BMatch = b.match(ARegex).join("");
    }
    catch(e) {
      BMatch = "";
    }
    
    return AMatch + BMatch;
  };

  function solve(a,b) {
    let setA = new Set(a);
    let setB = new Set(b);
    return [...(a+b)].filter(c => setA.has(c) ^ setB.has(c)).join("");
  };