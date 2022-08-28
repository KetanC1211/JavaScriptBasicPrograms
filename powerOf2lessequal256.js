const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter the number of n "));
let i=0;
let powerValue =1
while(powerValue<256){
    powerValue = Math.pow(2,i);
    console.log("Power of 2^"+i+" is "+powerValue);
    i++;
}