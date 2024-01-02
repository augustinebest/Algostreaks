// Level: Medium

/**
 * @param {number} num
 * @return {string}
 */

const intToRoman = function(num) {
  const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanSymbol =  ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";

  for(i=0; i<value.length; i++) {
    while(num >= value[i]) {
      result += romanSymbol[i]
      num-=value[i]
    }
  }

  return result
};

console.log(intToRoman(3))
console.log(intToRoman(58))
console.log(intToRoman(1994))