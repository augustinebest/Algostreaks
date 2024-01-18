// Level: Hard

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  function isInteger(str) {
    if (str === "" || str === "+" || str === "-") {
      return false;
    }

    for (let i = 0; i < str.length; i++) {
      if (!isDigit(str[i])) {
        return false;
      }
    }

    return true;
  }

  s = s.trim();
  let seenE = false;
  let seenDot = false;

  function isDigit(char) {
    return char >= "0" && char <= "9";
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "e" || char === "E") {
      if (seenE || i === 0 || i === s.length - 1) {
        return false;
      }
      seenE = true;
    } else if (char === ".") {
      if (seenDot || seenE || i === 0 || i === s.length - 1) {
        return false;
      }
      seenE = true;
    } else if (char === "+" || char === "-") {
      if (i !== 0 && s[i - 1] !== "e" && s[i - 1] !== "E") {
        return false;
      }
    } else if (!isDigit(char)) {
      return false;
    }
  }

  if (seenE) {
    const parts = s.split(/[eE]/);
    if (parts.length !== 2 || !isInteger(parts[1])) {
      return false;
    }
  }
};

console.log(isNumber("0"));
console.log(isNumber("e"));
console.log(isNumber("."));
