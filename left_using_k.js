let arr = [1, 2, 3, 4, 5, 6];
let k = Number(prompt("enter a k value"))
k = k % arr.length
for (let j = 0; j < k; j++) {
    let copy = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]

    }
    arr[arr.length - 1] = copy
}

console.log(arr)