// write a function that reverses the wrods in a given string

function reverse(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverse("Hello World")); // "World Hello"
