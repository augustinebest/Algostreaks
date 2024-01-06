// Level: Medium

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  const n = nums.length;
  const result = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    result[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = result[i];
  }

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
