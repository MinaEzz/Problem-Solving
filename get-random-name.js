/**
 * Select a random name from a list
 * @param {string[]} names
 * @returns {string}
 */

function getRandomName(names) {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

const names = ["angela", "johndoe", "jenny", "mike", "michel"];
console.log(getRandomName(names));
