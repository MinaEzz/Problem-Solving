// write a function that removes the exclamation mark from the end of a string.

function remove(string) {
  //   const strArray = string.split("");
  //   if (strArray[strArray.length - 1] === "!") {
  //     strArray.pop();
  //   }

  //   return strArray.join("");

  return string.replace(/!$/, "");
}

console.log(remove("!Hii!!!")); // !Hii!!
