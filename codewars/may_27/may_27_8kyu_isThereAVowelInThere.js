
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

function isVow(a){
    let vowels = {97: true, 101: true, 105: true, 111: true, 117: true};
    let vowelCharcode = {97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u'};
    return a.map((elem) => vowels[elem.toString()] ? vowelCharcode[elem] : elem);
  }

  function isVow(a){
    for (var i=0, l=a.length; i<l; ++i)
    {
      var char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
  }