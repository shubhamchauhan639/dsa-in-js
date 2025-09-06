let n = 20;
if (isNaN(n)) {
    console.log("invalid input");  
}
else if (n>0) {
    let sum = 0;
    for (let i= 0; i <=n; i++) {
        sum = sum+i
    }
 console.log(sum);    
}
else{
    console.log("should be more than 0");
    
}
