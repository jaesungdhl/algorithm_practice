Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split("").filter((c) => c !== '!').join('');
  }

  function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }