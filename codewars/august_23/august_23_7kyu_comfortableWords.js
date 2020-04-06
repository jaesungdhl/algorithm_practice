A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

That being said, create a function which receives a word and returns true/True if it's a comfortable word and false/False otherwise.

The word will always be a string consisting of only ascii letters from a to z.

alt text

To avoid problems with image availability, here's the lists of letters for each hand:

Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
Right: y, u, i, o, p, h, j, k, l, n, m

const comfortable_word = word => {
    let left = "qwertasdfgzxcvb";
    let pattern = word.split("").map(e => left.includes(e) ? "left" : "right");
    for(let i = 0 ; i < pattern.length - 1 ; i++) {
      if(pattern[i] == pattern[i + 1]) return false;
    }
    return true;
  };

  const comfortable_word = word => {
    const a = "[qwertasdfgzxcvb]"
    const b = "[yuiophjklnm]"
    
    return RegExp(`^((${a+b})*${a}?|(${b+a})*${b}?)$`).test(word)
  }