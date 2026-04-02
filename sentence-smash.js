// writa a function that takes an array of words and smashes them together into a sentence and returns the sentence.

function smash(words) {
  //   let sentence = "";

  //   for (let i = 0; i < words.length; i++) {
  //     if (i < words.length - 1) {
  //       sentence += words[i] + " ";
  //     } else {
  //       sentence += words[i];
  //     }
  //   }

  //   return sentence;

  return words.join(" ");
}

const words = ["Hello", "World", "!"];
console.log(smash(words)); // "Hello World !"
