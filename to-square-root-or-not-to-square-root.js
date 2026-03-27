// write a method that will get an integer array as a parameter and will process every number from this array.
// return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
  //   const newArray = [];

  //   for (const num of array) {
  //     const root = Math.sqrt(num);
  //     if (Number.isInteger(root)) {
  //       newArray.push(root);
  //     } else {
  //       const square = num * num;
  //       newArray.push(square);
  //     }
  //   }

  //   return newArray;

  return array.map((num) =>
    Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num,
  );
}

const array = [4, 3, 9, 7, 2, 1];
console.log(squareOrSquareRoot(array));
