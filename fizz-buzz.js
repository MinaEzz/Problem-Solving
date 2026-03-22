/**
 * FizzBuzz from 1 to 100
 * - Multiples of 3 → "FIZZ"
 * - Multiples of 5 → "BUZZ"
 * - Multiples of both → "FIZZBUZZ"
 */

function fizzBuzz() {
  const result = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FIZZBUZZ");
    } else if (i % 5 === 0) {
      result.push("BUZZ");
    } else if (i % 3 === 0) {
      result.push("FIZZ");
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(fizzBuzz());
