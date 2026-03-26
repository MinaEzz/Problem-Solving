// given a string you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  const strArray = str.split("");
  return strArray.map((char) => char.repeat(2)).join("");
}

console.log(doubleChar("123!")); // "112233!!"
