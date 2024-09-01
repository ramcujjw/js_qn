function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkFirstElementPrime(arr) {
    if (arr.length === 0) {
        console.log("Array is empty.");
        return;
    }

    const firstElement = arr[0];

 

    if (isPrime(firstElement)) {
        console.log(`${firstElement} is a prime number.`);
    } else {
        console.log(`${firstElement} is not a prime number.`);
    }
}


const array = [4, 10, 15];
checkFirstElementPrime(array);  