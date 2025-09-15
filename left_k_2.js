let n = Number(prompt("Enter size of array:"));
let arr = [];

for (let i = 0; i < n; i++) {
  arr[i] = Number(prompt(`Enter element ${i + 1}:`));
}

let k = Number(prompt("Enter how many positions to rotate left:"));

k = k % n; 
let rotated = arr.slice(k).concat(arr.slice(0, k));

console.log("Original Array:", arr);
console.log(`Array after left rotation by ${k}:`, rotated);
