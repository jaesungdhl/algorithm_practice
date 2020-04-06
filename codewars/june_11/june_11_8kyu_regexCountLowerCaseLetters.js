Your task is simply to count the total number of lowercase letters in a string.

Examples
```javascript lowercaseCount("abc"); ===> 3
lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

```csharp
LowercaseCountCheck("abc") == 3
LowercaseCountCheck("abcABC123") == 3
LowercaseCountCheck("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"") == 3
LowercaseCountCheck("") == 0
LowercaseCountCheck("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"") == 0
LowercaseCountCheck("abcdefghijklmnopqrstuvwxyz") == 26

function lowercaseCount(str){
    let regex = /[a-z]/g;
    let result = str.match(regex);
    return result == null ? 0 : result.length;
  }

  function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}