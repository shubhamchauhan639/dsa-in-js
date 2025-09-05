// let ans = 25
// if (ans >= 18) {
//     console.log("you are alegible to vote");
    
// } else {
// console.log("you are not eligible");
    
// }

let amount = 9000
if (amount > 0 && amount<=5000) {
    console.log(amount);
     
} else if (amount>5000&&amount<=7000){
    console.log(amount-Math.floor((5*amount)/100));
} else if (amount>7000&&amount<=9000){
    console.log(amount-Math.floor((10*amount)/100));
} else if (amount>9000){
    console.log(amount-Math.floor((20*amount)/100));
}
else{
    console.log("wrong input");
    
}