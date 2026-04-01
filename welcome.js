// write a welcome function that take a parameter language always a string, and returns a greeting if you have it in the database, it should be default English if the language is not in the database

const languages = {
  english: "Welcome",
  french: "Bienvenue",
  german: "Willkommen",
  italian: "Benvenuto",
  spanish: "Bienvenido",
  czech: "Vitejte",
  dutch: "Welkom",
  polish: "Witamy",
  swedish: "Valkommen",
};

function welcome(lang) {
  //   return Object.keys(languages).includes(lang)
  //     ? languages[lang]
  //     : languages["english"];

  return languages.hasOwnProperty(lang)
    ? languages[lang]
    : languages["english"];
}

console.log(welcome("french"));
