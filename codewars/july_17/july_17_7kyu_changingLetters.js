When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

function swap(st){
    let vowels = 'aeiou';
    return st.split("").map((char) => vowels.includes(char) ? char.toUpperCase() : char).join("");
  }

  function swap(st){
    return st.replace(/[aeiou]/g, v => v.toUpperCase() )
  }//z.