Bob is a lazy man.

He needs you to create a method that can determine how many letters and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1

function countLettersAndDigits(input) {
    let lettersDigitsCount = input.match(/[0-9A-Z]/gi);
    return !lettersDigitsCount ? 0 : lettersDigitsCount.length;
  }

  function countLettersAndDigits(s) {
    return s.replace(/[^a-z\d]/gi,"").length;
  }