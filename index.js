//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

const day1TempF = 32 
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

//conversion functions
// need to loop

function conversionToTotalC (array){
    let sum =0
    array.forEach(temp => {
        let celsius = (temp-32)*(5/9)
        sum += celsius
});return sum}

function conversionToTotalF (array){
    let sum =0
    array.forEach(temp => {
        let fahrenheit = (temp*9/5)+32
        sum += fahrenheit
});return sum}
 
//looping
//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

const fahrenheitArray = [day1TempF,day3TempF,day5TempF,day7TempF,day9TempF,day11TempF,day13TempF,day15TempF,day17TempF,day19TempF,day21TempF,day23TempF,day25TempF,day27TempF,day29TempF]
const celsiusArray = [day2TempC,day4TempC,day6TempC,day8TempC,day10TempC,day12TempC,day14TempC,day16TempC,day18TempC,day20TempC,day22TempC,day24TempC,day26TempC,day28TempC,day30TempC]

const totalCelsiusInArray = celsiusArray.reduce(function (accumulater,currentvalue){
    return accumulater+currentvalue
}, 0)


const totalFahrenheitInArray = fahrenheitArray.reduce(function (accumulater,currentvalue){
    return accumulater+currentvalue
}, 0)

const convertedToFahrenheit = conversionToTotalF(celsiusArray)
const convertedToCelsius = conversionToTotalC(fahrenheitArray)
console.log(convertedToCelsius)

//! Console.log the results for your own inspection if you'd like

const tot_temperature_in_celsius = totalCelsiusInArray + convertedToCelsius
const tot_temperature_in_fahrenheit = totalFahrenheitInArray + convertedToFahrenheit

const avg_temperature_in_celsius = tot_temperature_in_celsius/30
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit/30


//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

console.log("Total Celsius from array:", totalCelsiusInArray);
console.log("Total temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average temperature in Celsius:", avg_temperature_in_celsius); 

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};