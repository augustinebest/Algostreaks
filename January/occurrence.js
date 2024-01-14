// Level: Easy

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = function (haystack, needle) {
  let result = -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) return i;
  }

  return result;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("hello", "ll"));
