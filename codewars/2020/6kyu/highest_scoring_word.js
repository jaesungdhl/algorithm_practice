Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

function high(x){
    let Alphabets = "abcdefghijklmnopqrstuvwxyz";
    let ScoringMap = x.split(" ").map(word => {
      return [word, word.split("").reduce((a,n) => {
        a += Alphabets.indexOf(n) + 1;
        return a;
      }, 0)]
    })
    
    return ScoringMap.sort((a,b) => b[1] - a[1])[0][0];
  }

  function high(x){
    //transform the input string into array & define a string of alphabetical latin characters
    var arr = x.split(' ');
    var str = 'abcdefghijklmnopqrstuvwxyz';
    //Iterate through the array with input words to find the one with the greatest sum
    var newArr = arr.map(function(word){
      var sum = 0;
      for (var i = 0; i < word.length; i++) {
        sum += str.indexOf(word[i]);
      }
      return sum;
    });
    //Return the word with the greatest sum
    return arr[newArr.indexOf(Math.max(...newArr))];
  }