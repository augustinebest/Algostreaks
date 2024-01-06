// Level: Medium

/**
 * @param {number[]} prices
 * @return {number}
 */
var cummulativeMaxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = Math.max(0, prices[i] - prices[i - 1]);
    maxProfit += profit;
  }
  return maxProfit;
};

console.log(cummulativeMaxProfit([1, 2, 3, 4, 5]));
console.log(cummulativeMaxProfit([7, 1, 5, 3, 6, 4]));
