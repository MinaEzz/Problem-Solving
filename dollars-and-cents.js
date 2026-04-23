// create a function the will take a float and return the amount formatting in dollars and cents

function formatMoney(amount) {
  const value = amount || 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

console.log(formatMoney(2)); // "$2.00"
