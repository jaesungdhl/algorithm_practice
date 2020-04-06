125. Valid Palindrome
Easy

938

2561

Add to List

Share
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false

function isPalindrome(string) {
    if(!/[a-z0-9]/gi.test(string)) return true;
    let cleanStr = string.match(/[a-z0-9]/gi).join("").toLowerCase();
    for(let i = 0, j = cleanStr.length - 1; i < Math.floor(cleanStr.length / 2); i++, j--) {
        if(cleanStr[i] !== cleanStr[j]) return false;
    }
    return true;
}