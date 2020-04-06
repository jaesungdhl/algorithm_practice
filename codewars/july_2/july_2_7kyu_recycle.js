You are having a BBQ, after the BBQ you are left with the rubbish. You have 3 recycling boxes:

Red: Plastics, Green: Glass, Blue: Card.

You will need to sort the rubbish according to the material and return the number of items in each box in the form of an array i.e [2,3,4] where 2 is the number of plastic items, 3 is the number of glass items and 4 is the number of card items. assume:

Plastics > 0, Glass < 0, Card = 0

function recycleMe(recycle){ 
    let newArr = [0,0,0];
    recycle.forEach((trash) => {
      if(trash > 0){
        newArr[0]++;
      } else if(trash < 0){
        newArr[1]++;
      } else {
        newArr[2]++;
      }
    });
    return newArr;
  }

  function recycleMe(recycle) { 
    return recycle.reduce((b, r) => (++b[r > 0 ? 0 : r < 0 ? 1 : 2], b), [0, 0, 0]);
  }