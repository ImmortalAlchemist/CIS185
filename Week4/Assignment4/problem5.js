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

    let uniqueArr = [];
    let tempElem = "";
    let isUnique = true;

    //loop through original array
    for (let i = 0; i < arr.length; i++) {
        //reset values
        isUnique = true;

        //set current value
        tempElem = arr[i];

        //check current value against previous ones for uniqueness
        uniqueArr.forEach(element => {
            element == tempElem
                ? isUnique = false
                : tempElem = tempElem; //does nothing
        });
        
        //add value to new array
        isUnique
            ? uniqueArr.push(tempElem)
            : isUnique = isUnique; //does nothing
    }
    

    return uniqueArr;
}

function rotateArray(arr, positions) {
    // Rotate array to the right by 'positions'
    // Handle positions larger than array length

    let rotatedArr = [];
    let newPosition = 0;

    //normalize rotation
    positions = positions % arr.length;

    //for normal & overflow rotation
    for (let i = 0; i < arr.length; i++) {
        newPosition = i + positions;
        newPosition = newPosition % arr.length;
        rotatedArr[newPosition] = arr[i];
    }

    return rotatedArr;
}

function findSecondLargest(numbers) {
    // Find and return the second largest number
    // Return null if array has less than 2 unique values

    if (numbers.length > 1) {

        //start largest number
        let largest = numbers[0];
        let secondLargest = null;

        //update
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > largest) {
                secondLargest = largest;
                largest = numbers[i];
            } else if (numbers[i] > secondLargest && numbers[i] < largest) {
                secondLargest = numbers[i];
            }
        }

        return secondLargest;
    } else { //return null if there aren't 2 values
        return null;
    }
}

//Tests

console.log("\nreverseArray tests");
console.log(reverseArray([1, 2, 3, 4])); //[4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); //["c", "b", "a"]
console.log(reverseArray([]));

console.log("\nremoveDuplicates tests");
console.log(removeDuplicates([1, 2, 2, 3, 1, 4])); //[1, 2, 3, 4]
console.log(removeDuplicates(["a", "b", "a", "c"])); //["a", "b", "c"]

console.log("\nrotateArray tests");
console.log(rotateArray([1, 2, 3, 4], 1)); //[4, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4], 2)); //[3, 4, 1, 2]
console.log(rotateArray([1, 2, 3], 4)); //[3, 1, 2] (4 % 3 = 1 rotation)

console.log("\nfindSecondLargest tests");
console.log(findSecondLargest([10, 20, 30, 40])); //30
console.log(findSecondLargest([5, 5, 5])); //null
console.log(findSecondLargest([100, 50, 100, 75])); //75
