
function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit
    // Formula: (C × 9/5) + 32

    let fahrenheit = ((celsius * 9) / 5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius
    // Formula: (F - 32) × 5/9

    let celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius;
}

function getTemperatureDescription(fahrenheit) {
    // Return description based on temperature:
    // Below 32: "Freezing"
    // 32-50: "Cold"
    // 51-70: "Cool"
    // 71-85: "Warm"
    // Above 85: "Hot"
    let description = "Error";

    if (fahrenheit <= 32) {
        description = "Freezing";
    } else if (fahrenheit <= 50) {
        description = "Cold";
    } else if (fahrenheit <= 70) {
        description = "Cool";
    } else if (fahrenheit <= 85) {
        description = "Warm";
    } else {
        description = "Hot";
    }
    return description;
}


//Tests

console.log("\ncelsiusToFahrenheit tests");
console.log(celsiusToFahrenheit(0)); //32
console.log(celsiusToFahrenheit(100)); //212
console.log(celsiusToFahrenheit(-40)); //-40

console.log("\nfahrenheitToCelsius tests");
console.log(fahrenheitToCelsius(32)); //0
console.log(fahrenheitToCelsius(68)); //20
console.log(fahrenheitToCelsius(212)); //100

console.log("\ngetTemperatureDescription tests");
console.log(getTemperatureDescription(25)); //Freezing
console.log(getTemperatureDescription(75)); //Warm
console.log(getTemperatureDescription(95)); //Hot
