// Level: Easy

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let shorterStr = str1.length < str2.length ? str1 : str2;

  while (shorterStr.length > 0) {
    if (str1.startsWith(shorterStr) && str2.startsWith(shorterStr)) {
      const repeatedStr1 = shorterStr.repeat(str1.length / shorterStr.length);
      const repeatedStr2 = shorterStr.repeat(str2.length / shorterStr.length);
      if (repeatedStr1 === str1 && repeatedStr2 === str2) {
        return shorterStr;
      }
    }
    shorterStr = shorterStr.slice(0, shorterStr.length - 1);
  }

  return "";
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
