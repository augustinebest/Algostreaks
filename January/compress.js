// Level: Medium

/**
 * @param {character[]} chars
 * @return {number}
 */

const compress = function (chars) {
  let writeIndex = 0;

  for (let i = 0; i < chars.length; i++) {
    let count = 1;
    while (i + 1 < chars.length && chars[i] === chars[i + 1]) {
      count++;
      i++;
    }

    chars[writeIndex++] = chars[i];

    if (count > 1) {
      for (let digit of String(count)) {
        chars[writeIndex++] = digit;
      }
    }
  }

  return writeIndex;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6 -> ["a","2","b","2","c","3"]
console.log(compress(["a"])); // 1 -> ["a"]
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
); // 4 -> ["a","b","1","2"]
