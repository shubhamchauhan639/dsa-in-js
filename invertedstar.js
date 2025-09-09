let n = 5;
for (let i = n; i >= 1; i--) {
  let row = "";
  for (let s = 1; s <= n - i; s++) row += " ";
  for (let k = 1; k <= 2 * i - 1; k++) row += "*";
  console.log(row);
}
