// write a function that takes an integer number as an argument and return an array with all numbers up to the including that number, but excluding Zero

function monkeyCount(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

console.log(monkeyCount(15));
