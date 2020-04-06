1119. Remove Vowels from a String
Easy

60

70

Add to List

Share
Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

 

Example 1:

Input: "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:

Input: "aeiou"
Output: ""
 

Note:

S consists of lowercase English letters only.
1 <= S.length <= 1000
Accepted
28,604
Submissions
32,123

/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
    return S.replace(/[aeiou]/gi, "");
};