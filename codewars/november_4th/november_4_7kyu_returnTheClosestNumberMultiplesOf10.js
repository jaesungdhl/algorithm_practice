Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40

const closestMultiple10 = num => {
    let ones = Number(Math.floor(num).toString().slice(-1));
    let upDown;
    if(ones >= 5) upDown = "up";
    else upDown = "down";
    return upDown === "up" ? Math.floor(num / 10) * 10 + 10 :Math.floor(num / 10) * 10;
  };

  const closestMultiple10 = num => Math.round(num / 10) * 10;