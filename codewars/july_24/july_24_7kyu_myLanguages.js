Your task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: There will be no duplicate values.

Examples
{"Java": 10, "Ruby": 80, "Python": 65}  --> ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71} --> ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}   --> []
My other katas
If you enjoyed this kata then please try my other katas! :-)

Translations are welcome!

function myLanguages(results) {
    return Object.entries(results).sort((a,b) => b[1] - a[1]).reduce((a,n) => {
      if(n[1] >= 60){
        a.push(n[0]);
        return a;
      } else {
        return a;
      }
    }, []);
  }

  function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
  }