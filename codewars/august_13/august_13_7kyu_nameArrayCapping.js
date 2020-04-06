Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

function capMe(names) {
    return names.map(name => {
      let newName = '';
      for(let i = 0 ; i < name.length ; i++){
        if(i === 0) newName += name[i].toUpperCase();
        else newName += name[i].toLowerCase();
      }
      return newName;
    });
  }

  function capMe(names) {
    return names.map(function (n) { return n.charAt(0).toUpperCase() + n.substring(1).toLowerCase(); });
  }