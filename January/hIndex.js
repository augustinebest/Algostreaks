// Level: Medium

/**
 * @param {number[]} citations
 * @return {number}
 */

const hIndex = function (citations) {
  citations.sort((a, b) => b - a);

  let h = 0;

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
      h;
    } else {
      break;
    }
  }

  return h;
};

console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 3, 1]));
