/* Write a JavaScript program to find the smallest prime number greater than a given number. */
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

function findNextPrime(givenNumber) {
    let num = givenNumber + 1;
    while (true) {
        if (isPrime(num)) return num;
        num++;
    }
}

function main() {
    let givenNumber = 25;
    let nextPrime = findNextPrime(givenNumber);
    console.log(`The smallest prime number greater than ${givenNumber} is: ${nextPrime}`);
}
main();