This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    return s.split('')
    .map((e,i) => e.repeat(i + 1))
    .map(e => e.split("").map((c,i) => !i ? c.toUpperCase() : c.toLowerCase()).join(""))
    .join("-");
  }

  function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }