// Level: Medium

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = function (nums) {
  const length = nums.length;

  const leftProducts = new Array(length).fill(1);
  const rightProducts = new Array(length).fill(1);

  // calculate left product
  let leftProduct = 1;
  for (let i = 1; i < length; i++) {
    leftProduct *= nums[i - 1];
    leftProducts[i] = leftProduct;
  }

  // calculate right product
  let rightProduct = 1;
  for (let i = length - 2; i >= 0; i--) {
    rightProduct *= nums[i + 1];
    rightProducts[i] = rightProduct;
  }

  const result = [];
  for (let i = 0; i < length; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1,1,0,-3,3]))
