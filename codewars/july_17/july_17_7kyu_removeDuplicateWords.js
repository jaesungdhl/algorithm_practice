Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

function removeDuplicateWords (s) {
    let counter = {};
    s.split(" ").forEach((word) => !counter[word] ? counter[word] = 1 : counter[word]++);
    return Object.keys(counter).join(" ");
  }

  const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')