function reverseArray(arr) {
    // Return a new array with elements in reverse order
    // Don't use the built-in reverse() method!
    // Don't modify the original array

    let reversedArr = [];

    for (let i = 1; i <= arr.length; i++) {
        //grab from the last index - the looper value
        reversedArr.push(arr[arr.length - i]);
    }

    return reversedArr;
}

function removeDuplicates(arr) {
    // Return a new array with duplicates removed
    // Maintain original order of first occurrence
}

function rotateArray(arr, positions) {
    // Rotate array to the right by 'positions'
    // Handle positions larger than array length
}

function findSecondLargest(numbers) {
    // Find and return the second largest number
    // Return null if array has less than 2 unique values
}

//Tests

console.log("\nreverseArray tests");
console.log(reverseArray([1, 2, 3, 4])); //[4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); //["c", "b", "a"]
console.log(reverseArray([]));

console.log("\nremoveDuplicates tests");
console.log(removeDuplicates([]));