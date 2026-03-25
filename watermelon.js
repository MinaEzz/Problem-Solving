// https://codeforces.com/problemset/problem/4/A

function checkWatermelon(w) {
  return w > 2 && w % 2 === 0 ? "YES" : "NO";
}

console.log(checkWatermelon(8)); // "YES"
console.log(checkWatermelon(7)); // "NO"
