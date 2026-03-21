/**
 * Get the type of a given value
 * @param {*} value - any value
 * @returns {string} type of the value
 */

function getType(value) {
  return typeof value;
}

console.log(getType(5)); // "number"
console.log(getType("hello")); // "string"
console.log(getType(true)); // "boolean"
