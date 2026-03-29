// complete the method that takes boolean values and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  if (typeof bool !== "boolean") {
    return "Please Enter Boolean Value.";
  }

  return bool ? "Yes" : "No";
}

console.log(boolToWord(true)); // "Yes"
