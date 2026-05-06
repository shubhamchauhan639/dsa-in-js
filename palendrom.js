function palindrome(n) {
    let revNum = 0;
    let dup = n;

    while (n > 0) {

        let ld = n % 10;
        revNum = (revNum * 10) + ld;
        n = Math.floor(n / 10);
    }

    return dup === revNum;
}

// Driver code
let number = 4554;

if (palindrome(number)) {
    console.log(`${number} is a palindrome.`);
} else {
    console.log(`${number} is not a palindrome.`);
}