/**
 * Check if a number is even or odd
 * @param {number} num
 * @returns {string} "Even" or "Odd"
 */

function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(4)); // "Even"
console.log(checkEvenOdd(7)); // "Odd"
