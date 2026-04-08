// take an array and remove every second element from the array. Always keep the first element and start removing with the next element
function removeEveryOther(arr) {
  //   let newArr = [];

  //   for (const index in arr) {
  //     if (index % 2 === 0) {
  //       newArr.push(arr[index]);
  //     }
  //   }

  //   return newArr;

  return arr.filter((_element, index) => index % 2 === 0);
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove"]));
