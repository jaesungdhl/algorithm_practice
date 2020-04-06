Complete the function that returns the color of the given square on a normal, 8x8 chess board:

chessboard

Examples
"a", 8  ==>  "white"
"b", 2  ==>  "black"
"f", 5  ==>  "white"

function mineColor(file, rank) {
    if(!(file.charCodeAt(0) % 2)) {
      if(!(rank % 2)) return "black";
      else return "white";
    } else {
      if(!(rank % 2)) return "white";
      else return "black";
    }
  }

  let mineColor=(l, n)=>(l.charCodeAt()-97+n)%2 ? "black" : "white";