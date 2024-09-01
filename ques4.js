// 4.Write a JavaScript program to find the sum of squares of the elements of an array.
function sumOfSquares(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }

    return sum;
}

const array = [24,27];
const result = sumOfSquares(array);

console.log("The sum of squares is:", result);  
