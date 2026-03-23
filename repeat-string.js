/**
 * Repeat a string n times
 * @param {number} times
 * @param {string} str
 * @returns {string}
 */

function repeatStr(times, str) {
  if (times < 0) return "";
  return str.repeat(times);

  //   const strArray = [];
  //   for (let i = 0; i < times; i++) {
  //     strArray.push(str);
  //   }

  //   return strArray.join("");
}

console.log(repeatStr(10, "i"));
console.log(repeatStr(5, "hello"));
