// write a function findNeedle() that takes an array full of junk but contains one needle, afterwards it should return a message (as a string) that says:"found the needle at position " plus the index it.

function findNeedle(hayStack) {
  for (const i in hayStack) {
    if (hayStack[i] === "needle") {
      return `Found the needle at position ${i}`;
    }
  }
}

const hayStack = ["hay", "world", "needle", "junk", "dog"];
console.log(findNeedle(hayStack));

// function findNeedle(hayStack) {
//     return `Found the needle at position ${hayStack.indexOf("needle")}`;
// }
