You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

e.g. "The score is four nil" should return [4,0]

Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

"new score: two three"

"two two"

"Arsenal just conceded another goal, two nil"
Note:

Please return an array
Please rate and enjoy!

function scoreboard(string) {
    let numRegex = /one|two|three|four|five|six|seven|eight|nine|nil/gi;
    let scoreBoard = string.match(numRegex);
    return scoreBoard.map(score => {
      switch(score) {
        case "one":
          return 1;
        case "two":
          return 2;
        case "three":
          return 3;
        case "four":
          return 4;
          case "five":
          return 5;
        case "six":
          return 6;
        case "seven":
          return 7;
        case "eight":
          return 8;
        case "nine":
          return 9;
        default:
          return 0;
      }});
  }

  function scoreboard(string) {
    var arr=string.split(' ');
    var a=['nil','one','two','three','four','five','six','seven','eight','nine']
    return [a.indexOf(arr[arr.length-2]),a.indexOf(arr[arr.length-1])];
  }