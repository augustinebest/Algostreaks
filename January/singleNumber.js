// Level: Easy

/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = function (nums) {
  const setNum = Array.from(new Set(nums)).reduce((acc, num) => acc + num, 0);
  const arrayNum = nums.reduce((acc, num) => acc + num, 0);
  return 2 * setNum - arrayNum;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
