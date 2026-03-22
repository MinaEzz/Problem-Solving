/**
 * Calculate b percent of a
 * @param {number} a - base value
 * @param {number} b - percentage
 * @returns {number}
 */

function getPercentage(a, b) {
  return (b / 100) * a;
}

console.log(getPercentage(100, 50)); // 50
