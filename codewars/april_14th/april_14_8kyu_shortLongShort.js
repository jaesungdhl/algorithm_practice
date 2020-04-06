Caution: This kata does not currently have any known supported versions for JavaScript. It may not be completable due to dependencies on out-dated libraries/language versions.
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

For example:

solution("1", "22") // returns "1221"
solution("22", "1") // returns "1221"

function solution(a, b){
    if(a.length > b.length){
      var long = a;
      var short = b;
      console.log(long, short);
    } else {
      var long = b;
      var short = a;
      console.log(long, short);
    }
    return short + long + short;
  }