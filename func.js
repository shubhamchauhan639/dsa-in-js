function findSum(n) {
    let ans = 0
    for (let i = 0; i < n; i++){
        ans += i
        
    }
    return ans
}
function findsumAll() {
    return findSum(100)
}
setTimeout(() => {
    console.log(findsumAll());
    
}, 1000);
console.log("hello world");
