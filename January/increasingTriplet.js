//  Level: Medium

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const increasingTriplet = function (nums) {
  let small = Infinity;
  let big = Infinity;

  for (let num of nums) {
    if (num <= small) {
      small = num;
    } else if (num <= big) {
      big = num;
    } else {
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
