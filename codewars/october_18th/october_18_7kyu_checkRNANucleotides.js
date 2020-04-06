RNA Nucleotides are represented by four letters: "A", "G", "C" and "U". Any other letters are considered invalid for Nucleotides of an RNA sequence.

Create a function to check the given sequence of letters to ensure there are no invalid Nucleotides.

Return the message "Valid Sequence: (letters sequence)" if that is true.

Return the message "There is an invalid letter: (letter). At position: (position in sequence)" for the first occurance of an invalid letter.

For example:

Given the sequence "AUAUA, the result should return "Valid Sequence: AUAUA".

Given the sequence "GAUAB", the result should return "There is an invalid letter: B. At position: 5".

The reported position of the first invalid letter should be using real world counting, counting from 1 not 0, e.g. from sequence AADF, D = position 3.
All inputs will be in uppercase and only letters A-Z.
Good luck!

function checkNucleotides(sequence) {
    let regex = /[agcu]/i;
    for(let i = 0 ; i < sequence.length ; i++) {
      if(!regex.test(sequence[i])) return `There is an invalid letter: ${sequence[i]}. At position: ${i + 1}`;
    }
    return `Valid Sequence: ${sequence}`;
  }

  function checkNucleotides(sequence) {
    for (let k = 0; k < sequence.length; k++) {
      if (!["A", "G", "C", "U"].includes(sequence[k]))
        return `There is an invalid letter: ${sequence[k]}. At position: ${k + 1}`
    }
    return "Valid Sequence: " + sequence
  }