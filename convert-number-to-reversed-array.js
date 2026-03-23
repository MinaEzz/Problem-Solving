// given a random non-negative number, you have to return the digits of this number within an array in reverse order

function reverseNumber(number) {
  if (!number) return [];

  const stack = [];
  for (const num of String(number)) {
    stack.unshift(Number(num));
  }

  return stack;
}

console.log(reverseNumber(1234)); //4,3,2,1
