// create a function with two agruments that will return an array of the first(n) multiblies of (x).
// assume both the arguments will always be positive integers greater than 0

function countBy(x, n) {
  // const z = [];

  // for (let i = 1; i <= n; i++) {
  //   z.push(i * x);
  // }

  // return z;

  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}

console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2, 5)); // [2,4,6,8,10]
