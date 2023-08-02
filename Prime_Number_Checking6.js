/* Create a JavaScript function to check if a given array contains any prime numbers */

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

function containsPrimeNumbers(arr) {
    for (let num of arr) {
        if (isPrime(num)) {
            return true; // If any prime number is found, return true
        }
    }

    return false; // If no prime number is found in the array, return false
}

function main() {
    let myArray = [4, 6, 8, 9, 10, 11, 12];
    if (containsPrimeNumbers(myArray)) {
        console.log("The array contains at least one prime number.");
    } else {
        console.log("The array does not contain any prime numbers.");
    }
}
main();