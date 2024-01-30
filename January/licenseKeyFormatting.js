// Level: Easy

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const licenseKeyFormatting = function (s, k) {
  const formattedString = s.replace(/-/g, "").toUpperCase();
  const firstGroupLength = formattedString.length % k || k;
  let result = formattedString.slice(0, firstGroupLength);
  for (let i = firstGroupLength; i < formattedString.length; i += k) {
    result += "-" + formattedString.slice(i, i + k);
  }

  return result;
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("52-5g-3-J-w", 2));
