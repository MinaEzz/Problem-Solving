// you are given a number and have to make it negative . But maybe the number is already negative?

function makeNegative(number) {
  return number < 0 ? number : -number;
}

console.log(makeNegative(10)); //-10
console.log(makeNegative(-5)); //-5
