// Level Easy

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let count = 0;
  let i = 0;

  while (i < nums.length) {
    console.log(nums[i]);
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
    i++;
  }

  while (count < nums.length) {
    nums[count] = 0;
    count++;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]))