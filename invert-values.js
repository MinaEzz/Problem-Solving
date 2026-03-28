// given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and vice versa

function invert(array) {
  return array.map((num) => num * -1);
}

console.log(invert([1, 2, -3, -4])); // [-1, -2, 3, 4]
