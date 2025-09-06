let n = 5;
// Top half
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let s = 1; s <= n - i; s++) row += " ";
  for (let k = 1; k <= 2 * i - 1; k++) row += "*";
  console.log(row);
}
// Bottom half
for (let i = n - 1; i >= 1; i--) {
  let row = "";
  for (let s = 1; s <= n - i; s++) row += " ";
  for (let k = 1; k <= 2 * i - 1; k++) row += "*";
  console.log(row);
}
