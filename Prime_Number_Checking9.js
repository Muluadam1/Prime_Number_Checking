/* Create a JavaScript function to check if a given string is a prime number when its characters are concatenated. */

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    // Check if the number is divisible by 2 or 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check for other factors starting from 5
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function stringConcatPrime(str) {
    let num = Number(str.split("").join(""));
    return isPrime(num);
}

function main() {
    let inputString = "456";
    let isConcatPrime = stringConcatPrime(inputString);
    console.log(`The given string "${inputString}" is a prime number when its characters are concatenated: ${isConcatPrime}`);
}
main();