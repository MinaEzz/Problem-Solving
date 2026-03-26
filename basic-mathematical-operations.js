// write a function the does four basic mathematical operations (add, subtract, divide, multiply) and returns the result
// the function should take three arguments (operation:string, value1:number, value2:number)

function basicOperations(operation, value1, value2) {
  //   switch (operation) {
  //     case "+":
  //       return value1 + value2;

  //     case "-":
  //       return value1 - value2;

  //     case "*":
  //       return value1 * value2;

  //     case "/":
  //       return value1 / value2;

  //     default:
  //       return NaN;
  //   }

  return eval(value1 + operation + value2);
}

console.log(basicOperations("+", 1, 2)); //3
console.log(basicOperations("-", 2, 1)); //1
