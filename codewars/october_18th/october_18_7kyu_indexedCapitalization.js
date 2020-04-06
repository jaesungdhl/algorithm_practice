Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

Good luck!

function capitalize(s,arr){
    let strArr = s.split("");
    let filteredArr = arr.filter(num => num <= s.length);
    filteredArr.forEach(num => strArr[num] = strArr[num].toUpperCase());
    return strArr.join("");
  };

  function capitalize(s,arr){
  
    var capS = s.split("");
    
    for(var i = 0; i < arr.length; i++) {
      if(capS[arr[i]]) {
        capS[arr[i]] = capS[arr[i]].toUpperCase();
      }
    }
    
    capS = capS.join("");
    return capS
    };