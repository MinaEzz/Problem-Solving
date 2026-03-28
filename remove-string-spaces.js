// remove the spaces from a string and return the resultant string

function noSpace(str) {
  // const strArray = str.split("");
  // let noSpaceStr = "";

  // for (const item of strArray) {
  //   item !== " " && (noSpaceStr += item);
  // }

  // return noSpaceStr;

  return str.replaceAll(" ", "");
}

console.log(noSpace(" M I  N    a   ")); // "MINA"
