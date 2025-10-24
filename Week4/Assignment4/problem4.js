function createPyramid(height) {
    // Build a centered pyramid of asterisks (*)
    // Example: height = 3 →
    //   *
    //  ***
    // *****
    // Return as a string with \n between lines

    let output = "";
    let tempRow = "";

    //create rows
    for (let row = 0; row < height; row++) {
        let spaces = height - row - 1
        let stars = 2 * row + 1

        //create leading spaces
        for (let i = 0; i < spaces; i++) {
            tempRow += " ";
        }

        //create stars
        for (let i = 0; i < stars; i++) {
            tempRow += "*";
        }

        //add newline or not
        switch (row) {
            case 0:
                output += `${tempRow}`;
                break;
            default:
                output += `\n${tempRow}`;
                break;
        }

        tempRow = "";
    }

    return output;
}

function createNumberStaircase(steps) {
    // Build a staircase of increasing numbers
    // Example: steps = 5 →
    // 1
    // 12
    // 123
    // 1234
    // 12345

    let output = "";
    let stair = "";

    for (let i = 1; i <= steps; i++) {
        stair += `${i}`;

        //add newline or not
        switch (i) {
            case 1:
                output += `${stair}`;
                break;
            default:
                output += `\n${stair}`;
                break;
        }
    }

    return output;
}

function createCheckerboard(size) {
    // Create a checkerboard pattern of X and O
    // Example: size = 4 →
    // XOXO
    // OXOX
    // XOXO
    // OXOX

    let output = "";
    let evenrow = "";
    let oddrow = "";

    //create even row alternating X and O
    for (let i = 1; i <= size; i++) {
        (i % 2) == 1
            ? evenrow += "O"
            : evenrow += "X";
    }
    //create odd row alternating O and X
    for (let i = 1; i <= size; i++) {
        (i % 2) == 1
            ? oddrow += "X"
            : oddrow += "O";
    }

    //assemble rows
    for (let i = 1; i <= size; i++) {
        let row = "";

        //even row or odd row
        if ((i % 2) == 1)
        {
            row = oddrow;
        } else {
            row = evenrow;
        }
        
        //add newline or not
        switch (i) {
            case 1:
                output += `${row}`;
                break;
            default:
                output += `\n${row}`;
                break;
        }
    }

    return output;
}

//Tests

console.log("\ncreatePyramid tests");
console.log(createPyramid(3));
console.log(createPyramid(4));

console.log("\ncreateNumberStaircase tests");
console.log(createNumberStaircase(5));

console.log("\ncreateCheckerboard tests");
console.log(createCheckerboard(4));
