// https://leetcode.com/problems/longest-common-prefix/

// 14. Longest Common Prefix
// Easy

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function (strs) {
  // Longest common prefix string
  let longestCommonPrefix = '';

  // Base condition
  if (strs == null || strs.length == 0) {
    return longestCommonPrefix;
  }

  // Find the minimum length string from the array
  let minimumLength = strs.sort((a, b) => b.length - a.length)[0].length;

  // Loop for the minimum length
  for (let i = 0; i < minimumLength; i++) {
    // Get the current character from first string
    let current = strs[0][i];
    // Check if this character is found in all other strings or not
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] != current) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix += current;
  }
  return longestCommonPrefix;
};
