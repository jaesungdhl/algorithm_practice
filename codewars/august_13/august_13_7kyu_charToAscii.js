Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.

function charToAscii(string){
    let counter = {};
    for(let i = 0 ; i < string.length ; i++){
      if(/\w/.test(string[i])) counter[string[i]] = string.charCodeAt(i);
    }
    return !Object.keys(counter).length ? null : counter;
  }

  const charToAscii = string => {
    string = string.replace(/[^0-9a-z]/gi, '');
    return string ? [...string].reduce((h, c) => (h[c] = c.charCodeAt(0), h), {}) : null;
  }