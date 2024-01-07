// Level: Medium

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  let maxReachablePosition = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReachablePosition) {
      return false;
    }

    maxReachablePosition = Math.max(maxReachablePosition, i + nums[i]);
  }

  return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
