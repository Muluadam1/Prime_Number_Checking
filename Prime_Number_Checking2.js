/* Implement a JavaScript program to find all prime numbers within a given range. */

function isPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    if (number <= 3) {
        return true; // 2 and 3 are prime numbers
    }

    // Check divisibility by all numbers from 2 to the square root of the number
    let sqrtNumber = Math.floor(Math.sqrt(number));
    for (let i = 2; i <= sqrtNumber; i++) {
        if (number % i === 0) {
            return false; // The number has a divisor other than 1 and itself, so it's not prime
        }
    }

    return true; // If no divisors are found, the number is prime
}

function findPrimesInRange(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function main() {
    let startRange = 1;
    let endRange = 50;
    let primesInRange = findPrimesInRange(startRange, endRange);
    console.log(`Prime numbers between ${startRange} and ${endRange}:`);
    console.log(primesInRange);
}
main();