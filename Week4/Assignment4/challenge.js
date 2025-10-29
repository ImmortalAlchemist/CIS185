function decimalToBinary(decimal) {
    // Convert decimal number to binary string
    // Don't use toString(2)!

    let divnum = 2;

    let test = 0;

    //find greatest multiple of 2
    while (decimal % divnum > 2) {

        divnum = divnum * 2;        

        //break in case of fire
        if (test > 100) {
            test = 0;
            divnum = 0;
            break;
        }
        test++;
    }

    
}

function binaryToDecimal(binary) {
    // Convert binary string to decimal number
    // Don't use parseInt(binary, 2)!


}

function decimalToHexadecimal(decimal) {
    // Convert decimal to hexadecimal string
    // Use 0-9 and A-F for digits
    // Don't use toString(16)!


}

// Tests

console.log("\ndecimalToBinary tests");
console.log(decimalToBinary(10)); //"1010"
console.log(decimalToBinary(25)); //"11001"
console.log(decimalToBinary(0)); //"0"

console.log("\nbinaryToDecimal tests");
console.log(binaryToDecimal("1010")); //10
console.log(binaryToDecimal("11111")); //31
console.log(binaryToDecimal("0")); //0

console.log("\ndecimalToHexadecimal tests");
console.log(decimalToHexadecimal(255)); //"FF"
console.log(decimalToHexadecimal(26)); //"1A"
console.log(decimalToHexadecimal(16)); //"10"
