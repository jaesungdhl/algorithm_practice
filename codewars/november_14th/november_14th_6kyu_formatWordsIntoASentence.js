Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return ""

function formatWords(words){
    if(!words) return "";
    if(!words.length) return "";
    words = words.filter(word => word.length > 0);
    if(words.length === 1) return words[0];
    let formatArr = [];
    words.forEach((word, idx) => {
      if(idx === words.length - 1) {
        formatArr.push(" and", ` ${word}`);
      } else {
        formatArr.push(`${word}`, ", ");
      }
    })
    formatArr.splice(formatArr.lastIndexOf(", "), 1);
    return formatArr.join("").trim();
  }

  function formatWords(words){
    if (!words) return "";
    return words.filter(function(a) { return a !== ''}).join(', ').replace(/(, )+(\S+)$/, ' and $2');
  }