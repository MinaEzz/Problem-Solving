// consider an array list of sheep wher some sheep may be missing from their place, we need a function that counts the number of sheep present in the array (true means present).

function countSheep(arrayOfSheep) {
  if (!arrayOfSheep) return 0;

  let counter = 0;
  for (const value of arrayOfSheep) {
    if (value === true) counter++;
  }

  return counter;
}

console.log(countSheep([true, false, true, true, false, false, true])); //4
