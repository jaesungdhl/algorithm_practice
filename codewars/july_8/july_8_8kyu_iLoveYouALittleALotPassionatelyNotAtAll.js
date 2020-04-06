Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
    let messages = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    let iteration = 0;
    if(nbPetals > 6){
      if(nbPetals - (Math.floor(nbPetals / 6) * 6) === 0){
        iteration = 6;
      } else {
        iteration = nbPetals - (Math.floor(nbPetals / 6) * 6);
      }
    } else {
      iteration = nbPetals;
    }
    for(let i = 1 ; i < iteration ; i++){
      messages.push(messages.shift());
    }
    return messages[0];
  }

  const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]