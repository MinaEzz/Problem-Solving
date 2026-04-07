// create a function which answer the question "Are you playing Banjo?", if your name starts with the letter "R" or lower case "r", you are playing Banjo!

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Rikke")); // "Rikke plays banjo"
console.log(areYouPlayingBanjo("Martin")); // "Martin does not play banjo"
