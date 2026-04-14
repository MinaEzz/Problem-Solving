// find the first element of an array that is NOT consecutive
// by consecutive we mean +1, -1.

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i + 1];
    }
  }

  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
