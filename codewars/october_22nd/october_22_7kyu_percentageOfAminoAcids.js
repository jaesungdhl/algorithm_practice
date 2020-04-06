You are a biologist working on the amino acid composition of proteins. Every protein consists of a long chain of 20 different amino acids with different properties. Currently, you are collecting data on the percentage, various amino acids make up a protein you are working on. As manually counting the occurances of amino acids takes too long (especially when counting more than one amino acid), you decide to write a program for this task:

Write a function that takes two arguments,

A (snippet of a) protein sequence
A list of amino acid residue codes
and returns the rounded percentage of the protein that the given amino acids make up. If no amino acid list is given, return the percentage of hydrophobic amino acid residues ["A", "I", "L", "M", "F", "W", "Y", "V"].

function aaPercentage (proteinSequence, acidResidue = ["A", "I", "L", "M", "F", "W", "Y", "V"]) {
    let regex = new RegExp(`[${acidResidue.join("")}]`, "gi");
    let sequenceMatch = proteinSequence.match(regex);
    return !sequenceMatch ? 0 : Math.round((sequenceMatch.length / proteinSequence.length) * 100);
  }

  aaPercentage=(a,x=["A","I","L","M","F","W","Y","V"])=>
  [...a].filter(e=>x.includes(e)).length/a.length*100+.5|0