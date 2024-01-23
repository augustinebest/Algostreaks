//  Level: Easy

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let result = true;

  let lastFoundIndex = -1;

  for (let i = 0; i < s.length; i++) {
    const indexOfParentWord = t.indexOf(s[i], lastFoundIndex + 1);

    if (indexOfParentWord === -1) {
      result = false;
      break;
    }

    lastFoundIndex = indexOfParentWord;
  }

  return result;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("acb", "ahbgdc"));
