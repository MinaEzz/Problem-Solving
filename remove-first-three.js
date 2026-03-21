/**
 * Remove the first 3 characters from a string
 * @param {string} str
 * @returns {string}
 */

function removeFirstThree(str) {
  let result = "";

  for (let i = 3; i < str.length; i++) {
    result += str[i];
  }

  return result;
}

console.log(removeFirstThree("1234")); // "4"
