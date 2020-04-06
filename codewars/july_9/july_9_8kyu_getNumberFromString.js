Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

####javascript

getNumberFromString(s)
####ruby

get_number_from_string(s)
####CSharp

GetNumberFromString(string s)

function getNumberFromString(s) {
    let regex = /[0-9]/g;
    return Number(s.match(regex).join(""));
  }

  function getNumberFromString(s) {
    return +s.replace(/\D/g, "");
  }