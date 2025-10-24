function calculateAverage(scores) {
    // Calculate and return the average of an array of scores
    // Handle empty array case (return 0)

    //calculate the total for scores
    let total = 0;
    scores.forEach(element => {
        total += element;
    });

    let output = 0
    scores.length == 0
        //empty array case
        ? output = 0
        //average
        : output = (total / scores.length);
    return output;
}

//functions at O(n), but doesn't keep array ordering
//could rework it to be O(2n) but keep array ordering
function dropLowestScore(scores) {
    // Return a new array with the lowest score removed
    // If multiple lowest scores exist, remove only one
    // Don't modify the original array!

    let droppedScores = [];

    let lowestelement = 0; //initial value doesn't matter
    for (let i = 0; i < scores.length; i++)
    {
        //first element is just stored
        switch(i) {
            case 0:
                lowestelement = scores[i]
                break;
            default:
                //don't add an element if its the lowest, instead add the current
                if (scores[i] < lowestelement) {
                    droppedScores.push(lowestelement);
                    lowestelement = scores[i];
                } else {
                    droppedScores.push(scores[i]);
                }
                break;
        }

    }

    return droppedScores;
}

function getLetterGrade(score) {
    // Return letter grade based on score

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function curveGrades(scores, curveAmount) {
    // Add curveAmount to each score
    // Cap all scores at 100 (no score above 100)
    // Return new array, don't modify original

    let curvedScores = [];

    scores.forEach(element => {
        let curvedGrade = element + curveAmount;

        curvedGrade > 100
            ? curvedGrade = 100
            : curvedGrade = curvedGrade;
        
        curvedScores.push(curvedGrade);
    });

    return curvedScores;
}

//Tests

console.log("\ncalculateAverage tests");
console.log(calculateAverage([80, 90, 70])); //80
console.log(calculateAverage([100, 50, 75])); //75
console.log(calculateAverage([])); //0

console.log("\ndropLowestScore tests");
console.log(dropLowestScore([80, 90, 70, 85])); //[80, 90, 85]
console.log(dropLowestScore([50, 50, 75, 100])); //[50, 75, 100]

console.log("\ngetLetterGrade tests");
console.log(getLetterGrade(95)); //"A"
console.log(getLetterGrade(82)); //"B"
console.log(getLetterGrade(58)); //"F"

console.log("\ncurveGrades tests");
console.log(curveGrades([85, 95, 70], 10)); //[95, 100, 80]
console.log(curveGrades([90, 96, 80], 5)); //[95, 100, 85]
