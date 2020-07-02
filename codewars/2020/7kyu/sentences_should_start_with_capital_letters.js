In English, all words at the begining of a sentence should begin with a capital letter.

You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.

For example,

input:

"hello. my name is inigo montoya. you killed my father. prepare to die."

output:

"Hello. My name is inigo montoya. You killed my father. Prepare to die."

You may assume:

there will be no punctuation besides full stops and spaces

all but the last full stop will be followed by a space and at least one word

function fix(paragraph){
    if(paragraph.length === 0) return paragraph;
    
    return paragraph.split(". ").map(sentence => {
      if(sentence.length === 0) return sentence;
  
      let splittedSentence = sentence.split("");
      splittedSentence[0] = splittedSentence[0].toUpperCase();
      return splittedSentence.join("");
    }).join(". ");
  }

  function fix(paragraph){
    if(paragraph == '') return ''
    return paragraph.split('. ')
                    .map(word => word[0].toUpperCase() + word.slice(1))
                    .join('. ') 
   }