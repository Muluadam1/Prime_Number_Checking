/* Create a JavaScript function to find the largest prime number smaller than a given number. */

function isPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    if (number <= 3) {
        return true; // 2 and 3 are prime numbers
    }

    // Check divisibility by all numbers from 2 to the square root of the number
    const sqrtNumber = Math.floor(Math.sqrt(number));
    for (let i = 2; i <= sqrtNumber; i++) {
        if (number % i === 0) {
            return false; // The number has a divisor other than 1 and itself, so it's not prime
        }
    }

    return true; // If no divisors are found, the number is prime
}

function largestPrimeSmallerThan(number) {
    if (number <= 2) {
        return null; // There is no prime number smaller than or equal to 2
    }

    for (let i = number - 1; i >= 2; i--) {
        if (isPrime(i)) {
            return i; // Return the largest prime number found
        }
    }

    return null; // If no prime number is found in the given range, return null
}

function main() {
    let givenNumber = 50;
    let largestPrime = largestPrimeSmallerThan(givenNumber);
    if (largestPrime !== null) {
        console.log(`The largest prime number smaller than ${givenNumber} is ${largestPrime}.`);
    } else {
        console.log(`There is no prime number smaller than ${givenNumber}.`);
    }
}
main();