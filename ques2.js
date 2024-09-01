// 2. Write a JavaScript program to find the most frequent item of an array

function findMostFrequentItem(arr) {
    const frequency = {};
    let maxCount = 0;
    let mostFrequentItem = null;

    
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        frequency[item] = (frequency[item] || 0) + 1;
    }

    
    for (const item in frequency) {
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequentItem = item;
        }
    }

    return mostFrequentItem;
}


const array = [3, 1, 4, 4, 5, 4, 2, 1, 4, 3, 3, 5, 5];
const result = findMostFrequentItem(array);

console.log("The frequent item is:", result);  
