// Level: Easy

/**
 * @param {number[]} arr
 * @return {boolean}
 */

const uniqueOccurrences = function (arr) {
  const countMap = {};

  for (const num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  const uniqueCounts = new Set(Object.values(countMap));

  return uniqueCounts.size === Object.keys(countMap).length;
};

// Test cases
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
