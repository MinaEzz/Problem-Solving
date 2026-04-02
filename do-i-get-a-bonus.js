// write a function that takes salary as a number and bonus as a boolean and return the total salary after bonus

function bonusTime(salary, bonus) {
  return bonus ? salary * 10 : salary;
}

console.log(bonusTime(15000, true));
