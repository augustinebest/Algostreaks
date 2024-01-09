// Level: Easy

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = function (s) {
  const sen = s.split(" ");
  let result = 0;

  for (let i = sen.length - 1; i >= 0; i--) {
    if (sen[i].length !== result) {
      result = sen[i].length;
      break;
    }
  }
  return result;
};

console.log(lengthOfLastWord("a"));
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
