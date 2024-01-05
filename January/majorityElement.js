// Level: Easy

/**
 * @param {number[]} nums
 * @return {number}
 */

// Boyer-Moore Majority Voting Algorithm
const majorityElement = function (nums) {
  let count = 0,
    candidate = -1;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count++;
    } else {
      if (nums[i] === candidate) {
        count++;
      } else count--;
    }
  }
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) count++;
  }
  if (count > nums.length / 2) return candidate;
  return -1;
};

console.log(majorityElement([2, 3, 3, 2, 3, 2]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
