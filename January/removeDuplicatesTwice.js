// Level Medium

/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicatesTwice = function(nums) {
  if (nums.length <= 2) {
      return nums.length;
  }

  let count = 1;
  let j = 1; 

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
          count++;
      } else {
          count = 1;
      }

      if (count <= 2) {
          nums[j] = nums[i];
          j++;
      }
  }

  return j;
};

console.log(removeDuplicatesTwice([1,1,1,2,2,3]))
console.log(removeDuplicatesTwice([0,0,1,1,1,1,2,3,3]))