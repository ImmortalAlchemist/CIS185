
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(-40));


function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit
    // Formula: (C × 9/5) + 32

    let farenheit = celsius * 9 / 5 + 32;
    return farenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius
    // Formula: (F - 32) × 5/9
}

function getTemperatureDescription(fahrenheit) {
    // Return description based on temperature:
    // Below 32: "Freezing"
    // 32-50: "Cold"
    // 51-70: "Cool"
    // 71-85: "Warm"
    // Above 85: "Hot"
}