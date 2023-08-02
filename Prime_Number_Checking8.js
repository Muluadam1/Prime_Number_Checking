/* Implement a JavaScript function to generate the first N prime numbers. */
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

function generateNPrimes(N) {
    if (N <= 0) return [];

    let primes = [];
    let num = 2;

    while (primes.length < N) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

function main() {
    let N = 10;
    let firstNPrimes = generateNPrimes(N);
    console.log(`The first ${N} prime numbers are: ${firstNPrimes.join(", ")}`);
}
main();