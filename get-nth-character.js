/**
 * Get the nth character of a string
 * @param {string} str - input string
 * @param {number} n - position (1-based index)
 * @returns {string | undefined}
 */

function getNthCharacter(str, n) {
  return str[n - 1];
}

console.log(getNthCharacter("mina", 1)); // "m"
