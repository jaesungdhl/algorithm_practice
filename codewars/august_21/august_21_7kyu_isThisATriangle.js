Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{
  let sortedSidesArr = Array.from(arguments).sort((a,b) => a - b);
  return sortedSidesArr[0] + sortedSidesArr[1] > sortedSidesArr[2] ? true : false;
}

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}