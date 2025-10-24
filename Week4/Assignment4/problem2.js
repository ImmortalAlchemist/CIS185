function countLeaves(days) {
    // Each day, leaves fall following this pattern:
    // Day 1: 10 leaves
    // Day 2: 20 leaves (doubles)
    // Day 3: 30 leaves (+10 from day 2)
    // Day 4: 40 leaves (+10 from day 3)
    // Pattern: First day doubles, then +10 each day
    
    let total = 0;
    let dailyTotal = 0; //total for the specific day

    let components = '';

    for (let i = 1; i <= days; i++) {
        if (i == 1) {
            //initializer
            dailyTotal = 10;

            total += dailyTotal;
        } else if (i == 2) {
            //double daily
            dailyTotal = dailyTotal * 2;

            total += dailyTotal;
            //initialize the components, leave it open
            components = `(10 + ${dailyTotal}`
        } else {
            dailyTotal += 10;

            total += dailyTotal;
            components += ` + ${dailyTotal}`;
        }
    }

    // Display the component parts of the total if there are any
    let outputTotal = '';
    components == ''
        ? outputTotal = `${total}`
        : outputTotal = `${total} ${components})`;
    return outputTotal;
}

function categorizeLeafColors(leaves) {
    // leaves is an array of color strings
    // Count each color and return an object
    
    let colorCount = {};

    // Loop through array and count colors
    
    leaves.forEach(element => {
        //check if a property with the name of an element exists
        colorCount[`${element}`] == null
            //if it doesn't create it
            ? colorCount[`${element}`] = 1
            //if it does, increment is
            : colorCount[`${element}`] += 1;
    });

    //extra spaces after and before curcly brackets
    return colorCount;
}

//Tests

console.log("\ncountLeaves tests");
console.log(countLeaves(1)); //"10"
console.log(countLeaves(2)); //"30 (10 + 20)"
console.log(countLeaves(4)); //"100 (10 + 20 + 30 + 40)"
console.log(countLeaves(5)); //"150 (10 + 20 + 30 + 40 + 50)"

console.log("\ncategorizeLeafColors tests");
console.log(categorizeLeafColors(["red", "yellow", "red", "brown"])); //"{red: 2, yellow: 1, brown: 1}"
console.log(categorizeLeafColors(["orange", "orange", "orange"])); //"{orange: 3}"
console.log(categorizeLeafColors([])); //"{}"
