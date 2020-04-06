Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
    console.log(username);
    if(username.length < 4) return false;
    if(username.length > 16) return false;
    let uppercase = /[A-Z]/;
    let whitespace = /\s/;
    let validated = true;
    if(uppercase.test(username)) validated = false;
    if(whitespace.test(username)) validated = false;
    return validated;
  }

  function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
  }