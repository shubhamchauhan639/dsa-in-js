let arr = [12, 23, 2, 34, 5, 56, 23, 21]
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i]
    }
}
console.log(min)