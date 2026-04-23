/**
 * Get the position of a letter in the alphabet
 * @param {string} letter
 * @returns {number}
 */

// function position(letter) {
//   if (!letter || typeof letter !== "string") return null;

//   const lower = letter.toLowerCase();
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";

//   for (const i in alphabet) {
//     if (alphabet[i] === lower) {
//       return +i + 1;
//     }
//   }
// }

function position(letter) {
  if (!letter || typeof letter !== "string") return null;

  const lower = letter.toLowerCase();
  return lower.charCodeAt(0) - 96;
}

console.log(position("a")); // 1
console.log(position("z")); // 26
