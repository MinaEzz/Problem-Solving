// in some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, xor) corresponding to the Boolean "and" operator.

// The logical operator xor (e.g. &&, ||, and, or, xor) is a logical operator which returns true if exactly one of its operands is true, false otherwise.

// Examples:
// false xor false == false // since both are false
// true xor false == true // exactly one of the operands is true
// false xor true == true // exactly one of the operands is true
// true xor true == false // both are true, but their xor is false

function xor(a, b) {
  return a === b ? false : true;
}

console.log(xor(true, false));
