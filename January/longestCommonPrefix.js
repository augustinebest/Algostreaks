// Level: Easy

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let result = "";
  let referenceStr = strs[0];

  for (let i = 0; i < referenceStr.length; i++) {
    const currentStr = referenceStr[i];

    if (strs.every((str) => str[i] === currentStr)) {
      result += currentStr;
    } else break;
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
