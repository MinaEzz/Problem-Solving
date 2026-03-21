/**
 * Get the last 3 characters of a string
 * @param {string} str
 * @returns {string}
 */

function getLastThree(str) {
  return str.slice(-3);
}

console.log(getLastThree("1234")); // "234"
