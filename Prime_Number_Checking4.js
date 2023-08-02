/* Write a JavaScript program to count the number of prime numbers within a given range. */

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function countPrimesInRange(start, end) {
    let count = 0;
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            count++;
        }
    }
    return count;
}

function main() {
    let startRange = 1;
    let endRange = 50;
    let primeCount = countPrimesInRange(startRange, endRange);
    console.log(`The number of prime numbers between ${startRange} and ${endRange} is: ${primeCount}`);
}
main();