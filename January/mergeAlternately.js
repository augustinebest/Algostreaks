// Level: Easy

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

const mergeAlternately = function (word1, word2) {
  let result = "";
  const longestWord = word1.length >= word2.length ? word1 : word2;

  for (let i = 0; i < longestWord.length; i++) {
    const merge = word1[i] + word2[i];
    if (word1[i] && word2[i]) {
      result += merge;
    }
    if (!word1[i]) {
      result += word2[i];
    }

    if (!word2[i]) {
      result += word1[i];
    }
  }
  return result;
};

console.log(mergeAlternately("abc", "pqr")); // apbqcr
console.log(mergeAlternately("ab", "pqrs")); // apbqrs
console.log(mergeAlternately("abcd", "pq")); // apbqcd