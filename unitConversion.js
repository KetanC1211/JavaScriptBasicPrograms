const prompt = require('prompt-sync')();
//feet to inch conversion
let givenFeetValue = prompt("Enter feet for conversion") 
let inchValuefromGivenFeet;
inchValuefromGivenFeet = parseInt(12 * givenFeetValue);
console.log(inchValuefromGivenFeet)
//inch to feet conversion
let givenInchValue = prompt("Enter Inch for conversion") 
let feetValuefromGivenInch;
feetValuefromGivenInch = parseFloat(givenInchValue/12);
console.log(feetValuefromGivenInch)
//feet to meter conversion
let givenFeetValue1 = prompt("Enter feet for conversion") 
let meterValuefromGivenFeet;
meterValuefromGivenFeet = parseFloat(givenFeetValue1*0.3048);
console.log(meterValuefromGivenFeet)
//meter to feet conversion
let givenMeterValue= prompt("Enter meter for conversion") 
let feetValuefromGivenMeter;
feetValuefromGivenMeter = parseFloat(givenMeterValue*3.28084);
console.log(feetValuefromGivenMeter)