Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in "I\n I\n I", or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I

      function drawStairs(n) {
        let stairs = '';
        for(let row = 0 ; row < n ; row++) {
          for(let space = 0 ; space < row ; space++) {
            stairs += " ";
          }
          stairs += "I\n";
        }
        return stairs.slice(0, stairs.length - 1);
      }

      const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
