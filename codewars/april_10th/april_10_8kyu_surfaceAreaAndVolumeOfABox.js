Write a function that returns the total surface area and volume of a box as an array: [area, volume].

function getSize(width, height, depth){
    let volume = width * height * depth;
    let SA = 2*(height*width + height*depth + width*depth);
    return [SA, volume];
  }
  