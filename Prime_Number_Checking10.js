/* Write a JavaScript program to find the product of all prime numbers within a given range. */

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

function productOfPrimesInRange(start, end) {
    let product = 1;

    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            product *= num;
        }
    }

    return product;
}

function main() {
    let startRange = 1;
    let endRange = 30;
    let product = productOfPrimesInRange(startRange, endRange);
    console.log(`The product of all prime numbers between ${startRange} and ${endRange} is: ${product}`);
}
main();