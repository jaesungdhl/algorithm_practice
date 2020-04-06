Batman & Robin have gotten into quite a pickle this time. The Joker has mixed up their iconic quotes and also replaced one of the characters in their names, with a number. They need help getting things back in order.

Implement the getQuote method which takes in an array of quotes, and a string comprised of letters and a single number (e.g. "Rob1n") where the number corresponds to their quote indexed in the passed in array.

Return the quote along with the character who said it:

getQuote(["I am vengeance. I am the night. I am Batman!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], "Rob1n") 
  // =>  "Robin: Holy haberdashery, Batman!
Hint: You are guaranteed that the number in the passed in string is placed somewhere after the first character of the string. The quotes either belong to "Batman", "Robin", or "Joker".

var getQuote = function(quotes, hero){
    let robin = /^r/i;
    let batman = /^b/i;
    let joker = /^j/i;
    let index = hero.match(/\d/);
    if(robin.test(hero)) return `Robin: ${quotes[index[0]]}`;
    else if(batman.test(hero)) return `Batman: ${quotes[index[0]]}`;
    else return `Joker: ${quotes[index[0]]}`;
  }

  function getQuote(quotes, hero){
    return {R: 'Robin', J: 'Joker', B: 'Batman'}[hero[0]] + ': ' + quotes[hero.match(/\d+/)[0]];
  }