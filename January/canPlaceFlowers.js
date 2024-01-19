// Level: Easy

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

const canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  let i = 0;

  while (i < flowerbed.length) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;

      i += 2;
    } else {
      i++;
    }
  }

  return count >= n;
};

console.log(canPlaceFlowers([0, 0, 0], 1));
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
