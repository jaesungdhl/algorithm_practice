Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).

For example, the following call:

getRectangleString(3, 3);
Should return the following string:

***
* *
***
End each line of the string (including the last one) with a carriage return-line feed combination.

Note: You may assume that width and height will always be greater than zero.

function getRectangleString(width, height) {
    let topBottom = "*".repeat(width);
    let middle = Array.from(topBottom).map((elem, index) => index === 0 || index === topBottom.length - 1 ? "*" : " ").join("");
    let rectangle = "";
    for(let i = 0 ; i < height ; i++){
      if(i == 0 || i == height - 1) rectangle += (topBottom + "\r\n");
      else rectangle += (middle + "\r\n");
    }
    return rectangle;
  }

  const getRectangleString = (w, h) => 
  Array.from({ length: h }, (_, i) => 
    (!i || i === h - 1 ? 
      '*'.repeat(w) : 
      '*' + ' '.repeat(w - 2) + '*'
    ) + '\r\n'
  ).join('');