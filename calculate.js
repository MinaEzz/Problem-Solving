/**
 * Perform a sequence of operations on 6 values
 * Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @returns {number}
 */

function calculate(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}

console.log(calculate(1, 2, 1, 2, 2, 2)); //4
