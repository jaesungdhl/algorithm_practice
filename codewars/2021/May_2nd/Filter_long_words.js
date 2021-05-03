Write a function filterLongWords that takes a string sentence and an integer n.

Return a list of all words that are longer than n.

Example:

filterLongWords("The quick brown fox jumps over the lazy dog", 4) = ['quick', 'brown', 'jumps']

function filterLongWords(sentence, n) {
  return sentence
    .split(" ")
    .filter(s => s.length > n);
}

function filterLongWords(sentence, n) {
    var longer = [];
    var sent  = sentence.split(' ');
    console.log(sent)
    for(var i=0; i< sent.length; i++) {
      if( sent[i].length > n) {
        longer.push(sent[i])
      }
    }
    return longer
  }