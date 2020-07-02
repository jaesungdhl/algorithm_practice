Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"

function nextItem(itemList, item){
    if(typeof itemList == 'object' && !Array.isArray(itemList)){
      for(let i = 0; ; i++) {
        let nextGenerator = itemList.next();
        
        if(nextGenerator.value === undefined) return itemList.next().value;
        if(nextGenerator.value === item) return itemList.next().value;
      }
    } else {
      return itemList.indexOf(item) == -1 ? undefined : itemList[itemList.indexOf(item) + 1];
    }
  }

  function nextItem(xs, item) {
    var found = false;
    for (var x of xs) {
      if (found) return x;
      if (x == item) found = true;
    }
    return undefined;
  }