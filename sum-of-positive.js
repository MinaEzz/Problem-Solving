/**
 * Sum all positive numbers in an array
 * Note: if there is nothing to sum, the sum is default to 0
 * @param {number[]} arr
 * @returns {number}
 */

function sumOfPositive(nums) {
  let sum = 0;

  for (const num of nums) {
    if (num > 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(sumOfPositive([1, 2, 3, -4])); //6
