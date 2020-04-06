In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!

function reverseVowels(str) {
    let vowels = "aeiouAEIOU";
    let strArr = str.split("").map((char) => vowels.includes(char) ? '' : char);
    let reversedVowelArr = str.split("").filter((char) => vowels.includes(char)).reverse();
    let newArr = strArr.map((char, index) => char == '' ? reversedVowelArr.shift() : char);
    return newArr.join("");
  }

  const reverseVowels = str => {
    let vowels = str.replace(/[^aeiou]/gi, '').split('');
    return str.replace(/[aeiou]/gi, _ => vowels.pop());
  };