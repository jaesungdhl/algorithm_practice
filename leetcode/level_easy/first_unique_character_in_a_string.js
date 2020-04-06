387. First Unique Character in a String
Easy

1554

101

Add to List

Share
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

Accepted
406.7K
Submissions
788K

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(s == "") return -1;
    let uniqueCharDictionary = {};
    for(let char of s) {
        if(!uniqueCharDictionary[char]) uniqueCharDictionary[char] = 1;
        else uniqueCharDictionary[char]++;
    }
    for(let key in uniqueCharDictionary) {
        if(uniqueCharDictionary[key] == 1) {
            return s.indexOf(key);
        }
    }
    return -1;
};