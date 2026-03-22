// sum all numbers of a given array, except the higest and lowest element ( by value not index), note: default value is 0

function sumWithoutHighestAndLowest(nums) {
  if (!nums) return 0;

  let highestValue = Math.max(...nums);
  let lowestValue = Math.min(...nums);
  let sum = 0;
  const filteredNums = nums.filter(
    (num) => num !== highestValue && num !== lowestValue,
  );

  for (const num of filteredNums) sum += num;

  return sum;
}

console.log(sumWithoutHighestAndLowest([10, 12, 8, 9, 20])); //31
console.log(sumWithoutHighestAndLowest([10, 15, 20, 25, 30])); //60
