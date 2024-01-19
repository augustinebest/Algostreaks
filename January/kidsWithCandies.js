// Level: Easy

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

const kidsWithCandies = function (candies, extraCandies) {
  // Get the max candle among the kids
  const maxCandle = Math.max(...candies);
  
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandle) {
      candies[i] = true;
    } else {
      candies[i] = false;
    }
  }
  return candies;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));