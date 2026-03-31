// write a function to calculate the average of numbers in a given array.
// empty array should return 0

function calcAverage(array) {
  if (!array || array.length === 0) return 0;

  //   let sum = 0;
  //   for (const num of array) {
  //     sum += num;
  //   }

  //   return sum / array.length;

  return (
    array.reduce((previous, current) => previous + current, 0) / array.length
  );
}

console.log(calcAverage([2, 4, 6])); // 4
