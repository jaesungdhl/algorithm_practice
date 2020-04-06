Write function makeUpperCase.

function makeUpperCase(str) {
    return str.toUpperCase();
  }

  function makeUpperCase(str) {
    return str.replace(/[a-z]/g,s=>String.fromCharCode(s.charCodeAt(0)-32))
  }