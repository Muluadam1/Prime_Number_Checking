/* Implement a JavaScript function to find the sum of all prime numbers within a given range. */

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

function sumOfPrimesInRange(start, end) {
    let sum = 0;
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            sum += num;
        }
    }
    return sum;
}

function main() {
    let startRange = 1;
    let endRange = 50;
    let primeSum = sumOfPrimesInRange(startRange, endRange);
    console.log(`The sum of prime numbers between ${startRange} and ${endRange} is: ${primeSum}`);
}
main();