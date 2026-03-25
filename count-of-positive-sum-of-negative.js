// return an array where the first element is the count of positive numbers and second element is the sum of negative numbers, 0 is neither positive nor negative.

function countPositiveSumNegative(input) {
  if (!input) return [];

  const arrayOfPositive = input.filter((element) => element > 0);
  const arrayOfNegative = input.filter((element) => element < 0);
  let sumOfNegative = 0;

  for (const item of arrayOfNegative) {
    sumOfNegative += item;
  }

  return [arrayOfPositive.length, sumOfNegative];
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositiveSumNegative(inputArray)); // [10, -65]
