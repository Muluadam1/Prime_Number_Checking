/* Write a JavaScript function to check if a given number is prime. */

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

function main() {
    let numberToCheck = 1;
    if (isPrime(numberToCheck)) {
        console.log(`${numberToCheck} is a prime number.`);
    } else {
        console.log(`${numberToCheck} is not a prime number.`);
    }
}
main();