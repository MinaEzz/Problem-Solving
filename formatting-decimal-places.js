// each number should be formatted that it has exactly 2 decimal places
// for example 4.123 should be displayed as 4.12

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}

console.log(twoDecimalPlaces(4.123)); // 4.12
