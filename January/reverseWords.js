// Level: Medium

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const word = s.split(" ");

  let i = 0,
    j = word.length - 1;

  const noSpaceWord = [];

  for (let i = 0; i <= word.length - 1; i++) {
    if (word[i] !== "") {
      noSpaceWord.push(word[i]);
    }
  }

  while (i < j) {
    const temp = noSpaceWord[i];
    console.log(temp);
    if (temp !== " ") {
      noSpaceWord[i] = noSpaceWord[j];
      noSpaceWord[j] = temp;
      i++;
      j--;
    }
  }
  return noSpaceWord.join(" ").trim();
};

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"));
