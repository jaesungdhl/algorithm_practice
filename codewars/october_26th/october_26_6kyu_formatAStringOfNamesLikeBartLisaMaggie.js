Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names){
    switch(names.length) {
      case 0:
        return '';
      case 1:
        return names[0].name;
      case 2:
        return `${names[0].name} & ${names[1].name}`;
      default:
        let nameString = '';
        for(let i = 0 ; i < names.length ; i++) {
          if(!i) nameString += names[i].name;
          else if(i === names.length - 1) nameString += ` & ${names[i].name}`;
          else nameString += `, ${names[i].name}`
        }
        return nameString;
    }
  }

  function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }