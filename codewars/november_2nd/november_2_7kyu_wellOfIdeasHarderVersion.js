For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.

function well(x){
    let ideasCount = {
      "good": 0,
      "bad": 0
    };
    for(let i = 0 ; i < x.length ; i++) {
      for(let j = 0 ; j < x[i].length ; j++) {
        if(typeof x[i][j] !== "string") continue;
        if(x[i][j].toLowerCase() === "good") {
          ideasCount["good"]++;
        } else ideasCount["bad"]++;
      }
    }
    return ideasCount["good"] > 2 ? "I smell a series!" : ideasCount["good"] >= 1 ? "Publish!" : "Fail!";
  }

  function well(x) {
    let match = (''+x).match(/good/gi) || []
    if (match.length == 0) return 'Fail!'
    if (match.length <= 2) return 'Publish!'
    return 'I smell a series!'
  }